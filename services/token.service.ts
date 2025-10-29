import { DataPersistKeys, useDataPersist } from "@/hooks/useDataPersist";

  const { setPersistData, getPersistData, removeAllPersistData } = useDataPersist();

export const TokenService ={
  gettoken: async (): Promise<String> => {

  const toekn = await getPersistData<String>(DataPersistKeys.ACCESS_TOKEN);

  return toekn;
    
    
  },
  setToken:async(token: String): Promise<boolean> =>  {
   const res = await setPersistData(DataPersistKeys.ACCESS_TOKEN, token);

   return res;
    


    
  }
}