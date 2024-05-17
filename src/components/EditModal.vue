<template>
  <transition name="modal-fade">
  <div class="modal-backdrop" v-if="isOpen">
    <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
      <div class="modal-content">
          <div class="input-grid">
            <label class="label1" for="date">Огноо</label>
            <input v-model="formData.date" type="date"/>
            <label class="label1" for="owner">Эзэмшигч</label>
            <input v-model="formData.owner" type="text"  placeholder="Эзэмшигч">
            <label class="label1" for="department">Хэлтэс / Нэгж</label>
            <input v-model="formData.department" type="text"  placeholder="Хэлтэс / Нэгж">
            <label class="label1" for="complain">Гомдол</label>
            <input v-model="formData.complain" type="text"  placeholder="Complaints">
            <label class="label1" for="barcode">Баркод</label>
            <input v-model="formData.barcode" type="text"  placeholder="Barcode">
            <label class="label1" for="type">Төрөл</label>
            <div class="radio-button">
              <label>
              <input type="radio" v-model="formData.type" value="PC">PC</label>
              <label>
              <input type="radio" v-model="formData.type" value="Laptop">Laptop</label>
            </div>
            <label class="label1" for="model">Модел</label>
            <input v-model="formData.model" type="text"  placeholder="Model">
            <label class="label1" for="serviceTag">Service Tag</label>
            <input v-model="formData.serviceTag" type="text"  placeholder="Service Tag">
            <label class="label1" for="storage">Storage</label>
            <input v-model="formData.storage" type="text"  placeholder="Storage">
            <label class="label1" for="ram">RAM</label>
            <div class="radio-button">
              <label>
              <input type="radio" v-model="formData.ram" value="4GB">4GB RAM</label>
              <label>
              <input type="radio" v-model="formData.ram" value="8GB">8GB RAM</label>
              <label>
              <input type="radio" v-model="formData.ram" value="16GB">16GB RAM</label>
              </div>
              <label class="label1" for="cpu">CPU</label>
            <div class="radio-button">
              <label>
              <input type="radio" v-model="formData.cpu" value="Intel">Intel</label>
              <label>
              <input type="radio" v-model="formData.cpu" value="AMD">AMD</label>
            </div>
            <label class="label1" for="mac">MAC</label>
            <input v-model="formData.mac" type="text"  placeholder="MAC">
            <label class="label1" for="os">OS</label>
            <input v-model="formData.os" type="text"  placeholder="OS">
            <label class="label1" for="pcName">PC Name</label>
            <input v-model="formData.pcName" type="text"  placeholder="PC Name">
            <label class="label1" for="powerSupply">Power Supply</label>
            <input v-model="formData.powerSupply" type="text"  placeholder="Power Supply">
            <label class="label1" for="user">User</label>
            <input v-model="formData.user" type="text"  placeholder="User">
            <label class="label1" for="operation">Operation</label>
            <input v-model="formData.operation" type="text"  placeholder="Operation / Онош">
            <label class="label1" for="description">Comment</label>
            <input v-model="formData.description" type="text"  placeholder="Тайлбар">
            <label class="label1" for="demand">Шаардах / Акт</label>
            <div class="radio-button">
              <label>
              <input type="radio" v-model="formData.demand" value="Актлах">Актлах</label>
              <label>
              <input type="radio" v-model="formData.demand" value="Сэлбэг">Сэлбэг</label>
              <label>
              <input type="radio" v-model="formData.demand" value="Устгах">Устгах</label>
            </div>
            <input type="hidden" v-model="formData.createdDate" />
            <input type="hidden" v-model="formData.modifiedDate" />
          </div>
          <button class="button" @click="saveChanges">{{ isEditMode ? "Save" : "Add" }}</button>
          <button class="button-close" @click="close">x</button>
        </div>
      </div>
    </div>
  </transition>
</template>
  
<script>
  import axios from 'axios';
  import { format } from 'date-fns';
  
  export default {
    props: {
      isOpen: Boolean,
      rowData: {
        type: Object,
        default: () => ({}) 
      }, 
      isEditMode: {
        type: Boolean,
        default: true 
      }
    },
    data() {
      return {
        formData: { ...this.rowData, createdDate: this.isEditMode ? this.rowData.createdDate : new Date().toISOString(),
        modifiedDate: this.isEditMode ? this.rowData.modifiedDate : new Date().toISOString() 
    } 
      };
    },
    watch: {
      rowData: {
        handler(newVal) {
          this.formData = { ...newVal };
        },
        immediate: true
      }
    },
    created() {
      if (this.isEditMode) {
        const date = new Date(this.rowData.date);
        this.formData.date = format(date, 'yyyy-MM-dd');
        console.log()
      } else {
        this.formData.date = new Date().toISOString().split('T')[0];
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.setFocusOnFirstInput();
        document.addEventListener('keydown', this.shiftFocus);
      });
    },
    beforeUnmount() {
      document.removeEventListener('keydown', this.shiftFocus);
    },
    methods: {
    async saveChanges() {
        try {
            const username = localStorage.getItem('user');
            if (!username) {
                return;
            }
            this.formData.username = JSON.parse(username).userName;
            this.formData.modifiedDate = new Date().toISOString();
            
            // Ensure createdDate is preserved
            if (this.isEditMode) {
                this.formData.createdDate = this.rowData.createdDate || new Date().toISOString();
            } else {
                this.formData.createdDate = new Date().toISOString();
            }

            const response = this.isEditMode
                ? await axios.put(
                    `${process.env.NODE_ENV === "production" ? "http://10.21.60.152:9000" : "http://127.0.0.1:9000"}/user/updateTable/${this.rowData.id}`,
                    this.formData
                )
                : await axios.post(
                    `${process.env.NODE_ENV === "production" ? "http://10.21.60.152:9000" : "http://127.0.0.1:9000"}/user/insertTable`,
                    this.formData
                );
            if (response.data.message === "success") {
                window.alert("Successfully updated row");
                this.$emit("close");
            } else {
                window.alert("Failed to update row");
            }
        } catch (error) {
            window.alert("Error saving changes:", error.message);
        }
    },
      close() {
        this.$emit('close');
      },
      formatDate(dateString) {
        const date = new Date(dateString);
        return format(date, 'yyyy-MM-dd');
      },
      setFocusOnFirstInput() {
        const firstInput = this.$el.querySelector('input');
        if (firstInput) {
          firstInput.focus();
        }
      },
      shiftFocus(event) {
        if (event.key === 'Enter') {
          const inputs = this.$el.querySelectorAll('input');
          const focusedInput = document.activeElement;
          const index = Array.from(inputs).indexOf(focusedInput);
          if (index !== -1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        }
      }
    }
  }
</script>
  
<style scoped>
  .modal-backdrop {
    min-width: 750px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    max-width: 650px;
    width: 90%;
    margin: 0 auto;
    z-index: 3;
    border-radius: 10px;
    padding: 30px;
  }
  .modal-content {
    position: relative;
    padding: 20px;
  }
  .button-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 0;
    cursor: pointer;
    font-weight: bold;
    color: #4CAF50;
    background: transparent;
  }
  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
  .input-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    margin-top: 20px;
  }
  .input-row {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
  .input-grid input{
    flex: 1;
    margin-right: 10px;
    padding: 8px;
    border: 1px solid #cfcfcf;
    border-radius: 4px;
  }
  .label1 {
    font-size: 13px;
    font-weight: bold;
    width: 80px;
    text-align: right;
    align-self: center;
  }
  input[type="date"]:valid {
    color: grey;
  }
  .radio-button {
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
  }
  .radio-button label {
    margin-bottom: 2px;
    font-size: 12px;
  }
  .button {
    grid-column: span 4;
    justify-self: center;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background-color: #4CAF50;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    width: 80px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
  }
  .button:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
  }
</style>