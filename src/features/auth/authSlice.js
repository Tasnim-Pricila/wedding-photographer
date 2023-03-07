import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import auth from "../../firebase.init"

const initialState = {
    id: '',
    email: '',
    role: '',
    isLoading: true,
    isError: false,
    error: '',
}

export const createUser = createAsyncThunk("auth/createUser",
    async ({ email, password }) => {
        const data = await createUserWithEmailAndPassword(auth, email, password)
        // console.log(data);
        return data.user.email;
    })

export const loginUser = createAsyncThunk("auth/loginUser",
    async ({ email, password }) => {
        const data = await signInWithEmailAndPassword(auth, email, password)
        // console.log(data);
        return data.user.email;
    })

export const googleLogin = createAsyncThunk("auth/googleLogin",
    async () => {
        const googleProvider = new GoogleAuthProvider();
        const data = await signInWithPopup(auth, googleProvider)
        // console.log(data);
        return data.user.email;
    })

export const facebookLogin = createAsyncThunk("auth/facebookLogin",
    async () => {
        const facebookProvider = new FacebookAuthProvider();
        const data = await signInWithPopup(auth, facebookProvider)
        console.log(data);
        return data.user.email;
    })

export const getUser = createAsyncThunk("auth/getUser", async (email) => {
    const res = await fetch(`${process.env.REACT_APP_DEV_URL}/users/${email}`)
    const data = await res.json();
    // console.log(data);
    return data;
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.email = ""
        },
        setUser: (state, action) => {
            state.email = action.payload;
            state.isLoading = false;
        },
        toggleLoading: (state) => {
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.email = action.payload;
                state.isError = false;
                state.error = '';
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.email = '';
                state.isError = true;
                state.error = action.error.message;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.email = action.payload;
                state.isError = false;
                state.error = '';
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.email = '';
                state.isError = true;
                state.error = action.error.message;
            })
            .addCase(googleLogin.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(googleLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.email = action.payload;
                state.isError = false;
                state.error = '';
            })
            .addCase(googleLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.email = '';
                state.isError = true;
                state.error = action.error.message;
            })
            .addCase(facebookLogin.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(facebookLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.email = action.payload;
                state.isError = false;
                state.error = '';
            })
            .addCase(facebookLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.email = '';
                state.isError = true;
                state.error = action.error.message;
            })
            .addCase(getUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.email = action.payload.data.email;
                state.id = action.payload.data._id;
                state.isError = false;
                state.error = '';
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false;
                state.email = '';
                state.isError = true;
                state.error = action.error.message;
            })
    }
})
export const { logout, setUser, toggleLoading } = authSlice.actions;
export default authSlice.reducer;