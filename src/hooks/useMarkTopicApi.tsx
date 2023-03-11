import { markTopicAsRead } from "../services/manualsService";

const useMarkTopicApi = () => {
  const request = async (topic: any) => {
    try {
      await markTopicAsRead(topic.id);
    } catch (ex) {}
  };

  return { request };
};

export default useMarkTopicApi;
