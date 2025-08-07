import { PlayIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const podcastType = defineType({
  name: "podcasts",
  title: "Podcasts",
  type: "document",
  icon: PlayIcon,
  fields: [
    defineField({
      name: "title",
      title: "Video Title",
      type: "string",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      title: "Author/Creator",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Video Duration",
      type: "string",
      placeholder: "e.g., 5 minutes, 1:30, 45 seconds",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "videoFile",
      title: "Video File",
      type: "file",
      options: {
        accept: "video/*",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "posterImage",
      title: "Video Thumbnail/Poster",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Thumbnail image shown before video plays",
    }),
    defineField({
      name: "tag",
      title: "Video Category Tag",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Tag Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        // Replace "color" type with "string" for color fields
        defineField({
          name: "bgColor",
          title: "Background Color",
          type: "string",
          description: "Hex color code, e.g. #FF0000",
        }),
        defineField({
          name: "textColor",
          title: "Text Color",
          type: "string",
          description: "Hex color code, e.g. #FFFFFF",
        }),
      ],
      preview: {
        select: {
          title: "text",
          bgColor: "bgColor",
          textColor: "textColor",
        },
        prepare({ title, bgColor, textColor }) {
          return {
            title: title || "Untitled Tag",
            subtitle: `BG: ${bgColor || "Not set"} | Text: ${textColor || "Not set"}`,
          };
        },
      },
    }),
    defineField({
      name: "description",
      title: "Video Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "featured",
      title: "Featured Video",
      type: "boolean",
      description: "Mark this video to be featured in the featured section",
      initialValue: false,
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "posterImage",
      duration: "duration",
    },
    prepare({ title, author, media, duration }) {
      return {
        title: title || "Untitled Video",
        subtitle: `${author || "Unknown Author"} • ${duration || "No duration"}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Published Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Published Date, Old",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
    {
      title: "Title A-Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});
