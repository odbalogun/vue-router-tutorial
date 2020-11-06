<script>
export default {
  name: 'Param',
  data () {
    return {
      UserInput: ''
    }
  },
  methods: {
    GoToRoute: function () {
      this.$router.push({name: 'Paramdetails', params: { id: this.UserInput }})
    }
  }
}
</script>
