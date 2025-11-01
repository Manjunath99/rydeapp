import { EmeregencyContact, EmergencyContacts } from '@/types/emergencyContact';
import { EmergencyContactPayload } from '@/types/emergencyContactPayload.ts/emeregencyContactPayload';
import { mainApiMethods } from './apis/index';
import { API_URLS } from './apis/urls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataPersistKeys } from '@/hooks/useDataPersist';

export const EmergencyContactService = {
  getEmergencyContact: async (userId: string): Promise<EmergencyContacts> => {
    const token = await AsyncStorage.getItem(DataPersistKeys.ACCESS_TOKEN);
    try {
      const data = await mainApiMethods.get<EmergencyContacts>(
        `${API_URLS.EMERGENCY_CONTACT.LIST}/${userId}`,
      );
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  addEmergencyContact: async (
    payload: Partial<EmeregencyContact>,
    userId: string,
  ): Promise<EmeregencyContact> => {
    try {
      const data = await mainApiMethods.post<EmeregencyContact>(
        `${API_URLS.EMERGENCY_CONTACT.ADD}/${userId}`,
        payload,
      );

      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  updateEmergencyContact: async (
    payload: Partial<EmeregencyContact>,
  ): Promise<EmeregencyContact> => {
    try {
      const data = await mainApiMethods.put<EmeregencyContact>(
        API_URLS.EMERGENCY_CONTACT.UPDATE,
        payload,
      );
      return data;
    } catch (e) {
      return Promise.reject(e);
    }
  },
  deleteEmergencyContact: async (userId: string, contactId: string) => {
    try {
      const data = await mainApiMethods.delete(API_URLS.EMERGENCY_CONTACT.DELETE, {
        params: { userId, contactId },
      });
      return data;
    } catch (e) {
      return Promise.reject(e);
    }
  },
};
