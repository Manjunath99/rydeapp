import { EmeregencyContact,EmergencyContacts } from "@/types/emergencyContact";
import { EmergencyContactPayload } from "@/types/emergencyContactPayload.ts/emeregencyContactPayload";
import { mainApiMethods } from "./apis/index";
import { API_URLS } from "./apis/urls";

export const EmergencyContactService = {
  getEmergencyContact: async(userId: string ): Promise<EmergencyContacts> => {
    console.log("API_URLS.EMERGENCY_CONTACT.LIST",`${API_URLS.EMERGENCY_CONTACT.LIST}/${userId}`);
    try {
      const data = await mainApiMethods.get<EmergencyContacts>(`${API_URLS.EMERGENCY_CONTACT.LIST}/${userId}`

      );
      console.log("useGetEmergencyContactsuseGetEmergencyContacts",data);
      return data;
    } catch (err) {
       console.log("useGetEmergencyContactsuseGetEmergencyContacts",err);
      return Promise.reject(err);
    }
  },
  addEmergencyContact: async (payload: Partial<EmeregencyContact>,userId: string): Promise<EmeregencyContact> =>  {
    try {
      console.log("addEmergencyContactaddEmergencyContactaddEmergencyContactaddEmergencyContact",userId,payload)
      const data = await mainApiMethods.post<EmeregencyContact>(`${API_URLS.EMERGENCY_CONTACT.ADD}/${userId}`, payload, );

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