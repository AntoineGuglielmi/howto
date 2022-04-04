import {TOPICS} from '@/constants/topics.js';
export const state = () => ({
  topics: TOPICS
  // topics: []
});

export const mutations = {
  setTopics(state,payload) {
    state.topics = payload.topics;
  }
};

export const getters = {
  getTopics(state) {
    return state.topics;
  },
  getTopicBySlug: (state) => (topicSlug) => {
    return state.topics.filter(topic => topic.slug === topicSlug)[0];
  }
};

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    
  }
};
