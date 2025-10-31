export interface EmeregencyContact {
  name: string;
  phoneNumber: string;
  relationship: string;
  contactId: string;
  userId: string;
  createdAt: string;
}

export type EmergencyContacts = Array<EmeregencyContact>;
