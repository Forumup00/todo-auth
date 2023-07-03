<template>
  <div class="container-fluid">
    <div class="row mx-0">
      <div class="col-6 mx-auto">
        <div
          class="w-100 parent d-flex justify-content-center align-items-center"
        >
          <table class="table mb-0">
            <tbody>
              <tr>
                <th scope="col">Name</th>
                <td>{{ getData.name }}</td>
              </tr>
              <tr>
                <th scope="col">Email</th>
                <td>{{ getData.email }}</td>
              </tr>
              <tr>
                <th scope="col">Phone</th>
                <td>{{ getData.phone }}</td>
              </tr>
              <tr>
                <th scope="col">Created_At</th>
                <td>{{ getDate }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  middleware: ['auth'],
  data() {
    return {}
  },
  computed: {
    getData() {
      return this.$auth.user
    },
    getDate() {
      return moment(this.getData.created_at).fromNow()
    },
  },
}
</script>

<style scoped>
.parent {
  height: calc(100vh - 68px);
}
</style>
