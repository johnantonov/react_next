import { Middleware, createSlice } from '@reduxjs/toolkit'
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

let localState = getLocalState() ;

function getLocalState() {
  if (typeof localStorage !== 'undefined') {
    if (localStorage.getItem('waitlist') !== null) {
      return JSON?.parse(localStorage.getItem('waitlist') as string);
    } else {
      localStorage.setItem('waitlist', JSON.stringify({}))
      return {};
    }
  } else {
    return {}
  }
}  


export const logger: Middleware = (store) => (next) => (action) => {
  console.log('Action:', action.payload.email);
  console.log('State before dispatch:', store.getState());
  next(action);
  console.log('State after dispatch:', store.getState());
}


const waitlistSlice = createSlice({
  name: 'waitlist',
  initialState: localState,
  reducers: {
    addUserToWaitlist: (state, action) => {
      localStorage.setItem('waitlist', JSON.stringify(action.payload));
      return state;
    }
  }
})


// как использовать RTK query
// нужен сервак с апи
// export const emailsApi = createApi({
//   reducerPath: "emails",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/data/emails.json" }),
//   endpoints: (builder) => ({
//     getEmails: builder.query({ query: () => "emails" })
//   })
// })

// как использовать в компоненте, сначала добавить в стор в редьюсер и мидлвары
// const { data, isLoading, error} = useGetEmailsQuery()
// if (isLoading) {return <span>Loading</span>}
// if (!data || error) {return <span>Not Found</span>} и тд


// export const { useGetEmailsQuery } = emailsApi
export const { addUserToWaitlist } = waitlistSlice.actions
export const selectInfoWaitlist = (state: any) => state.waitlist
export default waitlistSlice.reducer