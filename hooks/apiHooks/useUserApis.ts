import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { UserService } from '@/services/user.service';
import type { User } from '@/types/user';




export const useRegisterUser = () => {
  return useMutation({
    mutationFn: UserService.register,
  });
};

// ✅ Login user
export const useLoginUser = () => {
  return useMutation({
    mutationFn: UserService.login,
  });

};
// ✅ Fetch user profile
export const useCurrentUser = () => {
  return useQuery<User>({
    queryKey: ['current-user'],
    queryFn: UserService.getCurrentUser,
  });
};

// ✅ Update user profile
// export const useUpdateUser = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: UserService.updateProfile,
//     onSuccess: (updatedUser) => {
     
//       queryClient.setQueryData(['user-profile'], updatedUser);
//     },
//   });
// };

// // ✅ Delete user
// export const useDeleteUser = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: UserService.deleteAccount,
//     onSuccess: () => {
//       queryClient.removeQueries({ queryKey: ['user-profile'] });
//     },
//   });
// };




