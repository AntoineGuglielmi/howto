export default ({ app, store }, inject) => {

  const pluginMethods = {

    today(u_params = {}) {
      return this.formatDate(new Date(),u_params);
    },

    formatDate(date, u_params = {}) {
      const params = {
        ...{
          locale: undefined, // Uses the client default locale
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        },
        u_params
      };

      return new Intl.DateTimeFormat(params.locale, params).format(date);
    }

  };

  inject('antoine', pluginMethods);

}