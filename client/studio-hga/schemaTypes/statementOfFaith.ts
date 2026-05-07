import { defineField, defineType } from "sanity";

export default defineType({
  name: "statementOfFaith",
  title: "Statements of Faith",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Statement of Faith",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "statements",
      title: "Statements",
      type: "array",

      of: [
        {
          type: "string",
        },
      ],

      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});