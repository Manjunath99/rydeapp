import { EmeregencyContact,EmergencyContacts } from "@/types/emergencyContact";
import { EmergencyContactPayload } from "@/types/emergencyContactPayload.ts/emeregencyContactPayload";
import { mainApiMethods } from "./apis/index";
import { API_URLS } from "./apis/urls";

export const EmergencyContactService = {
  getEmergencyContact: async(userId: string ): Promise<EmergencyContacts> => {
    try {
      const data = await mainApiMethods.get<EmergencyContacts>(API_URLS.EMERGENCY_CONTACT.LIST, { params: { userId, } });
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  addEmergencyContact: async (payload: Partial<EmeregencyContact>): Promise<EmeregencyContact> =>  {
    try {
      const data = await mainApiMethods.post<EmeregencyContact>(API_URLS.EMERGENCY_CONTACT.ADD, payload);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  updateEmergencyContact: async( payload: Partial<EmeregencyContact>,): Promise<EmeregencyContact> => {
    try{
      const data = await mainApiMethods.put<EmeregencyContact>(API_URLS.EMERGENCY_CONTACT.UPDATE, payload);
      return data;

    }
    catch(e){
      return Promise.reject(e);
    }
  },
  deleteEmergencyContact: async( userId: string, contactId: string) => {
    try{
      const data = await mainApiMethods.delete(API_URLS.EMERGENCY_CONTACT.DELETE, { params: { userId, contactId } });
      return data;
    }
    catch(e){
      return Promise.reject(e);
    } 
  },
};