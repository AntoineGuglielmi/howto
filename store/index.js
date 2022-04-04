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
    // const topicsCollection = await fireDb.collection('topics').get()
    // const topics = topicsCollection.docs.map(doc => doc.data());
    // commit('setTopics', {topics});
    const budgets = await this.$axios.$get('/api/budgets');
    budgets.forEach(budget => {
      console.log(budget.name)
    })
  }
};
