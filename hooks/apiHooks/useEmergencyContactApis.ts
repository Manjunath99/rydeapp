import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { EmeregencyContact,EmergencyContacts } from '@/types/emergencyContact';
import { EmergencyContactService } from '@/services/emeregencyContact.service';


export const useAddEmergencyContact = () => {
  return useMutation<EmeregencyContact, Error, { payload: Partial<EmeregencyContact>; userId: string }>({
    mutationFn: ({ payload, userId }) =>
      EmergencyContactService.addEmergencyContact(payload, userId),
  });
};



export const useGetEmergencyContacts = (userId: string) => {
  return useQuery<EmergencyContacts>({
    queryKey: ['emergency-contacts'],
queryFn: ({ queryKey }) => {
      
      return EmergencyContactService.getEmergencyContact(userId);
    },
    });
};



// ✅ Fetch single emergency contact by ID
// export const useEmergencyContactById = (id: string) => {
//   return useQuery<EmergencyContact>({
//     queryKey: ['emergency-contact', id],
//     queryFn: () => EmergencyContactService.getById(id),
//     enabled: !!id, // prevents firing when id is undefined
//   });
// };

// ✅ Add new emergency contact
// export const useAddEmergencyContact = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: EmergencyContactService.add,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['emergency-contacts'] });
//     },
//   });
// };

// ✅ Update existing emergency contact
// export const useUpdateEmergencyContact = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: EmergencyContactService.update,
//     onSuccess: (updatedContact) => {
//       queryClient.setQueryData(['emergency-contact', updatedContact.id], updatedContact);
//       queryClient.invalidateQueries({ queryKey: ['emergency-contacts'] });
//     },
//   });
// };

// // ✅ Delete emergency contact
// export const useDeleteEmergencyContact = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: EmergencyContactService.delete,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['emergency-contacts'] });
//     },
//   });
// });
