export default {
  name: 'careers',
  title: 'Careers',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the job listing',
    },
    {
      name: '_id',
      title: 'ID',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'type',
      title: 'Job Type',
      type: 'string',
      description: 'The type of job (e.g., Permanent, Contract)',
    },
    {
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      description: 'The employment type (e.g., Full time, Part time)',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      description: 'The start date of the job (e.g., September 2023)',
    },
    {
      name: 'applyLink',
      title: 'Apply Link',
      type: 'url',
      description: 'Link to apply for the job',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Job description and details',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Tags related to the job listing (e.g., Engineering, Marketing)',
    },
  ],
}
