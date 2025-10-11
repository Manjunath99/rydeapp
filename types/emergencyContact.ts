export interface EmeregencyContact {
  name: string;
  phone: string;
  relationship: string;
  contactId: string;
  userId: string;
  createdAt: string;
}

export type EmergencyContacts = Array<EmeregencyContact>;
