export const filtersMock = {
    filters: {
        location: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            label: 'The ideal location'
        },
        startDate: {
            elementType: 'datePicker',
            elementConfig: {
                type: 'text'
            },
            value: '',
            label: 'From'
        },
        endDate: {
            elementType: 'datePicker',
            elementConfig: {
                type: 'text'
            },
            value: '',
            label: 'To'
        },
        category: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: '', description: '' },
                    { value: 'miscellaneous', description: 'Miscellaneous' },
                    { value: 'sports', description: 'Sports' },
                    { value: 'music', description: 'Music' },
                    { value: 'arts & theatre', description: 'Arts & Theatre' },
                    { value: 'film', description: 'Film' }
                ]
            },
            value: '',
            label: 'Your mood asks for:'
        }
    },
    events: [],
    filtered: false,
    loading: false,
    error: null,
    currentPage: 0,
    totalPages: 1
}