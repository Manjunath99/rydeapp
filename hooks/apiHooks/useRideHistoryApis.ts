import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {  } from '@/services/rideHistory.service';
import type { User } from '@/types/user';




// export const useRegisterUser = () => {
//   return useMutation({
//     mutationFn: UserService.register,
//   });
// };

// // ✅ Login user
// export const useLoginUser = () => {
//   return useMutation({
//     mutationFn: UserService.login,
//   });

// };
// // ✅ Fetch user profile
// export const useCurrentUser = () => {
//   return useQuery<User>({
//     queryKey: ['current-user'],
//     queryFn: UserService.getCurrentUser,
//   });
// };