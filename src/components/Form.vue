<template>
  <ElCard class="form-card">
    <ElForm :model="formData" ref="addItemForm" :rules="rules" label-postion="top">
      <ElFormItem label="Type" prop="type">
        <ElSelect class="type-select" v-model="formData.type" placeholder="Choose type..">
          <ElOption label="Income" value="INCOME" />
          <ElOption label="Outcome" value="OUTCOME" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment" placeholder="Comment" />
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value" placeholder="Value" />
      </ElFormItem>
      <ElButton type="primary" @click="onSubmit">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    formData: {
      type: "INCOME",
      comment: "",
      value: 0,
    },
    rules: {
      comment: [
        { required: true, message: "Please enter comment", trigger: "blur" },
      ],
      value: [
        { required: true, message: "Please enter value", trigger: "blur" },
        { type: "number", message: "Value must be a number", trigger: "blur" },
        { validator: (rule, value, callBack) => {
          if(value == 0) callBack(new Error("Please enter a value other than zero"));
          else callBack();
          }, trigger: "blur" },
      ],
    },
  }),
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          if (this.formData.type == "OUTCOME") {
            this.formData.value = -Math.abs(this.formData.value);
          }
          this.$emit("submitForm", { ...this.formData });
          this.$refs.addItemForm.resetFields();
        }
      });
    },
  },
  computed: {
  }
};
</script>

<style>
  .form-card {
    max-width: 540px;
    margin: 0 auto;
  }

  .type-select {
    width: 100%;
  }
</style>