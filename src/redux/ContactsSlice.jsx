import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({

    reducerPath: 'contactsApi',

    baseQuery: fetchBaseQuery({ baseUrl: 'https://62b36eac4f851f87f45adafc.mockapi.io' }),

    tagTypes: ['Contact'],

    endpoints: (builder) => ({

      getContacts: builder.query({
        query: () => ({
          url: `/contacts`,
          method: 'GET',
        }),
        providesTags: ['Contact'],
      }),

      addContact: builder.mutation({
          query: values => ({
              url: '/contacts',
              method: 'POST',
              body: values,
          }),
          invalidatesTags: ['Contact']
      }),

      deleteContact: builder.mutation({
        query: id => ({
            url: `/contacts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Contact']
    }),
    }),
  })

  export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;