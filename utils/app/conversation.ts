import { Conversation } from '@/types/chat';

export const updateConversation = (
  updatedConversation: Conversation,
  allConversations: Conversation[],
) => {
  const updatedConversations = allConversations.map((c) => {
    if (c.id === updatedConversation.id) {
      return updatedConversation;
    }

    return c;
  });

  saveConversation(updatedConversation);
  saveConversations(updatedConversations);

  return {
    single: updatedConversation,
    all: updatedConversations,
  };
};

export const saveConversation = (conversation: Conversation) => {
  //localStorage.setItem('selectedConversation', JSON.stringify(conversation));
  // Empty/no operation
};

export const saveConversations = (conversations: Conversation[]) => {
  // Empty/no operation
  //localStorage.setItem('conversationHistory', JSON.stringify(conversations));
};
