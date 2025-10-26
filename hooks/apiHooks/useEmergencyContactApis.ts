import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { EmeregencyContact,EmergencyContacts } from '@/types/emergencyContact';
import { EmergencyContactService } from '@/services/emeregencyContact.service';

// ✅ Fetch all emergency contacts
export const useEmergencyContacts = (userId: string) => {
  return useQuery<EmergencyContacts>({
    queryKey: ['emergency-contacts',userId],
queryFn: ({ queryKey }) => {
      const [ id] = queryKey; 
      return EmergencyContactService.getEmergencyContact(id as string);
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
