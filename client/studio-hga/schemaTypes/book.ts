import { defineField, defineType } from "sanity";

export default defineType({
  name: "book",
  title: "Books",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Book Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string",
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "string",
      description: "e.g. KES 500 or $10",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "format",
      title: "Format",
      type: "string",
      options: {
        list: [
          { title: "Hard Copy", value: "hard_copy" },
          { title: "Soft Copy (PDF)", value: "pdf" },
        ],
        layout: "radio",
      },
      initialValue: "hard_copy",
    }),

    defineField({
      name: "image",
      title: "Book Cover",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "link",
      title: "Purchase Link",
      type: "url",
      description: "WhatsApp, checkout page, or external store link",
    }),

    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "Buy Now",
    }),

    defineField({
      name: "stock",
      title: "Stock Quantity",
      type: "number",
      description: "How many physical copies available",
      initialValue: 0,
    }),
  ],
});