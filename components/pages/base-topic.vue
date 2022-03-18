<script>
export default {
  data() {
    return {
      sudo: true
    };
  },
  computed: {
    displaySudo() {
      return this.sudo ? 'sudo ' : '';
    },
    sudoMode() {
      return !this.sudo ? 'ON' : 'OFF';
    }
  },
  methods: {
    switchSudo() {
      this.sudo = !this.sudo;
    }
  }
};
</script>