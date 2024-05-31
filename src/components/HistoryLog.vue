<template>
  <div class="history-log">
    <h1>History Log</h1>
    <table class="log-table">
      <thead>
        <tr>
          <th>Actions</th>
          <th>Хэрэглэгч</th>
          <th>Мөр</th>
          <th>Огноо</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="log in historyLog" :key="log.id">
          <td>{{ log.action }}</td>
          <td>{{ log.username }}</td>
          <td>{{ log.detail_id }}</td>
          <td>{{ formatDate(log.createdDate) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      historyLog: [],
      username: "",
    };
  },
  async mounted() {
    try {
      this.username = JSON.parse(localStorage.getItem("user")).userName;
      const response = await axios.get(
        `${
          process.env.NODE_ENV === "production"
            ? "http://10.21.68.43:9000"
            : "http://127.0.0.1:9000"
        }/user/historyLog`,
        {
          params: {
            username: this.username,
          },
        }
      );
      this.historyLog = response.data;
    } catch (error) {
      console.error("Error fetching history log:", error);
    }
  },
  methods: {
    formatDate(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString();
    },
  },
};
</script>

<style scoped>
.history-log {
  margin-top: 20px;
  text-align: center;
}
.log-table {
  width: 600px;
  border-collapse: collapse;
  border: 1px solid #ddd;
  margin-left: auto;
  margin-right: auto;
}
.log-table th,
.log-table td {
  padding: 12px;
}
.log-table th {
  background-color: #e5e5e5;
}
.log-table tr:nth-child(odd) {
  background-color: #f9f9f9;
}
</style>
