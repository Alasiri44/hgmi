import { defineType, defineField } from "sanity";

export default defineType({
  name: "member",
  title: "Members",
  type: "document",
  fields: [
    defineField({
      name: "memberNumber",
      title: "Member Number",
      type: "string",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "registrationDate",
      title: "Registration Date",
      type: "datetime",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "middleName",
      title: "Middle Name",
      type: "string",
    }),

    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "gender",
      title: "Gender",
      type: "string",
      options: {
        list: [
          { title: "Male", value: "male" },
          { title: "Female", value: "female" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "dateOfBirth",
      title: "Date of Birth",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "maritalStatus",
      title: "Marital Status",
      type: "string",
      options: {
        list: [
          { title: "Single", value: "single" },
          { title: "Married", value: "married" },
        ],
      },
    }),

    defineField({
      name: "occupation",
      title: "Occupation / Profession",
      type: "string",
    }),

    // CONTACT INFORMATION
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),

    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "residence",
      title: "Area of Residence",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // CHURCH BACKGROUND
    defineField({
      name: "spiritualBackground",
      title: "Spiritual Background",
      type: "string",
      options: {
        list: [
          {
            title: "I am a new believer",
            value: "new_believer",
          },
          {
            title: "Transferring from another church",
            value: "transferring",
          },
          {
            title: "Just visiting/exploring",
            value: "visiting",
          },
          {
            title: "Rededicating my life",
            value: "rededicating",
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "previousChurch",
      title: "Previous Church",
      type: "string",
    }),

    defineField({
      name: "heardAboutUs",
      title: "How did you hear about us?",
      type: "string",
      options: {
        list: [
          {
            title: "Invited by a friend/family",
            value: "friend",
          },
          {
            title: "Social Media",
            value: "social_media",
          },
          {
            title: "Church Website",
            value: "website",
          },
          {
            title: "Walk-in / Driving by",
            value: "walk_in",
          },
          {
            title: "Other",
            value: "other",
          },
        ],
      },
    }),

    defineField({
      name: "ministryInterest",
      title: "Ministry Interest",
      type: "string",
      options: {
        list: [
          {
                title: "General Membership",
                value: "general"
          },
          {
            title: "Worship & Arts Ministry",
            value: "choir",
          },
          {
            title: "Media & Tech Team",
            value: "media",
          },
          {
            title: "Ushering & Protocol",
            value: "ushers",
          },
          {
            title: "Children's Ministry",
            value: "children",
          },
          {
            title: "Youth Ministry",
            value: "youth",
          },
        ],
      },
    }),
  ],

  preview: {
    select: {
      title: "firstName",
      subtitle: "phoneNumber",
    },

    prepare(selection) {
      const { title, subtitle } = selection;

      return {
        title,
        subtitle,
      };
    },
  },
});