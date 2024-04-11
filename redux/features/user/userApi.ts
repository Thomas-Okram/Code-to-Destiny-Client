import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateAvatar: builder.mutation({
      query: (avatar) => ({
        url: "update-user-avatar",
        method: "PUT",
        body: { avatar },
        credentials: "include" as const,
      }),
    }),
    editProfile: builder.mutation({
      query: ({ name }) => ({
        url: "update-user-info",
        method: "PUT",
        body: {
          name,
        },
        credentials: "include" as const,
      }),
    }),
    updatePassword: builder.mutation({
      query: ({ oldPassword, newPassword }) => ({
        url: "update-user-password",
        method: "PUT",
        body: {
          oldPassword,
          newPassword,
        },
        credentials: "include" as const,
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "get-users",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getSpecificUser: builder.query({
      query: (id) => ({
        url: `get-user/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    updateSpecificUser: builder.mutation({
      query: ({formData,id}) => ({
        url: `update-specific-user/${id}`,
        method: "PUT",
        body:formData,
        credentials: "include" as const,
      }),
    }),
    deleteCourseFromUser: builder.mutation({
      query: ({courseId,id}) => ({
        url: `delete-course-from-user/${id}/${courseId}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
    }),

    updateUserRole: builder.mutation({
      query: ({ email, role }) => ({
        url: "update-user",
        method: "PUT",
        body: { email, role },
        credentials: "include" as const,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `delete-user/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useUpdateAvatarMutation,
  useEditProfileMutation,
  useUpdatePasswordMutation,
  useDeleteCourseFromUserMutation,
  useGetAllUsersQuery,
  useGetSpecificUserQuery,
  useUpdateSpecificUserMutation,
  useUpdateUserRoleMutation,
  useDeleteUserMutation
} = userApi;
