<template>
    <div class="history-log">
      <h1>History Log</h1>
      <table class="log-table">
        <thead>
          <tr>
            <th>Action</th>
            <th>User ID</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(log, index) in historyLog" :key="log.id" :class="{ 'even-row': index % 2 === 0 }">
            <td>{{ log.action }}</td>
            <td>{{ log.user_id }}</td>
            <td>{{ formatDate(log.created_at) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
import axios from 'axios';

export default {
  data() {
    return {
      historyLog: [],
      username: ''
    };
  },
  async mounted() {
    try {
      this.username = JSON.parse(localStorage.getItem('user')).userName;
      
      const response = await axios.get('http://127.0.0.1:3000/user/historyLog', {
        params: {
          username: this.username
        }
      });
      this.historyLog = response.data;
    } catch (error) {
      console.error('Error fetching history log:', error);
    }
  },
  methods: {
    formatDate(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString();
    }
  }
};
</script>
  
  <style scoped>
  .history-log {
    margin-top: 20px;
  }
  
  .log-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .log-table th, .log-table td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
  
  .log-table th {
    background-color: #f2f2f2;
  }
  
  .even-row {
    background-color: #f9f9f9;
  }
  </style>
  