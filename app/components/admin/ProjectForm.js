"use client";

import { useState } from "react";
import ImageUpload from "./ImageUpload";

export default function ProjectForm({ initialData, onSubmit, submitLabel = "Save Project" }) {
  const [formData, setFormData] = useState(
    initialData || {
      id: "",
      media: {
        type: "",
        url: "",
        thumbnail: "",
      },
      tags: [],
      date: new Date().toISOString().split("T")[0],
      url: "",
      translations: {
        en: {
          title: "",
          description: "",
          content: "",
        },
        nl: {
          title: "",
          description: "",
          content: "",
        },
      },
    }
  );

  const [tagInput, setTagInput] = useState("");
  const [activeTab, setActiveTab] = useState("en");
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleMediaChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      media: {
        ...prev.media,
        [field]: value,
      },
    }));
  };

  const handleTranslationChange = (locale, field, value) => {
    setFormData((prev) => ({
      ...prev,
      translations: {
        ...prev.translations,
        [locale]: {
          ...prev.translations[locale],
          [field]: value,
        },
      },
    }));
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      handleChange("tags", [...formData.tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    handleChange(
      "tags",
      formData.tags.filter((tag) => tag !== tagToRemove)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.id) {
      alert("Please enter a project ID");
      return;
    }
    if (!formData.translations.en.title) {
      alert("Please enter an English title");
      return;
    }
    if (!formData.translations.nl.title) {
      alert("Please enter a Dutch title");
      return;
    }

    // Normalize: for images, sync thumbnail with url if empty
    const dataToSubmit = { ...formData };
    if (dataToSubmit.media.type === "" && dataToSubmit.media.url && !dataToSubmit.media.thumbnail) {
      dataToSubmit.media = { ...dataToSubmit.media, thumbnail: dataToSubmit.media.url };
    }

    setLoading(true);
    try {
      await onSubmit(dataToSubmit);
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Info */}
      <div className="bg-white shadow rounded-lg p-6 space-y-6">
        <h3 className="text-lg font-medium text-gray-900">Basic Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project ID *
            </label>
            <input
              type="text"
              value={formData.id}
              onChange={(e) => handleChange("id", e.target.value)}
              placeholder="e.g., my-project"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              disabled={!!initialData}
            />
            <p className="mt-1 text-xs text-gray-500">
              Lowercase, no spaces (use dashes)
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date *
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project URL
            </label>
            <input
              type="url"
              value={formData.url}
              onChange={(e) => handleChange("url", e.target.value)}
              placeholder="https://yourproject.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </div>

      {/* Media */}
      <div className="bg-white shadow rounded-lg p-6 space-y-6">
        <h3 className="text-lg font-medium text-gray-900">Media</h3>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Media Type
          </label>
          <select
            value={formData.media.type}
            onChange={(e) => handleMediaChange("type", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Image</option>
            <option value="video">Video</option>
          </select>
        </div>

        <ImageUpload
          label="Main Media"
          value={formData.media.url}
          onChange={(url) => handleMediaChange("url", url)}
          accept={formData.media.type === "video" ? "video/*" : "image/*"}
          isVideo={formData.media.type === "video"}
        />

        {formData.media.type === "video" && (
          <ImageUpload
            label="Video Thumbnail"
            value={formData.media.thumbnail}
            onChange={(url) => handleMediaChange("thumbnail", url)}
            accept="image/*"
          />
        )}
      </div>

      {/* Tags */}
      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Tags</h3>

        <div className="flex gap-2">
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddTag();
              }
            }}
            placeholder="Add a tag"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {formData.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
            >
              {tag}
              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className="text-green-600 hover:text-green-800"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Translations */}
      <div className="bg-white shadow rounded-lg p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Content</h3>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("en")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeTab === "en"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              🇬🇧 English
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("nl")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeTab === "nl"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              🇳🇱 Nederlands
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              value={formData.translations[activeTab].title}
              onChange={(e) =>
                handleTranslationChange(activeTab, "title", e.target.value)
              }
              placeholder="Project title"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              value={formData.translations[activeTab].description}
              onChange={(e) =>
                handleTranslationChange(activeTab, "description", e.target.value)
              }
              placeholder="Short description (1-2 sentences)"
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content (HTML)
            </label>
            <textarea
              value={formData.translations[activeTab].content}
              onChange={(e) =>
                handleTranslationChange(activeTab, "content", e.target.value)
              }
              placeholder="Full content with HTML tags: <p>Text</p><h2>Heading</h2><ul><li>Item</li></ul>"
              rows={10}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-mono text-sm"
            />
            <p className="mt-1 text-xs text-gray-500">
              Use HTML tags: &lt;p&gt;, &lt;h2&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;
            </p>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-end gap-4">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {loading ? "Saving..." : submitLabel}
        </button>
      </div>
    </form>
  );
}
