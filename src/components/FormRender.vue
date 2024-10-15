<template>
    <form-create
      v-model="formData"
      v-model:api="fapi"
      :rule="rule"
      :option="option"
      @submit="onSubmit"
    ></form-create>
  </template>
  
  <script setup>
  import {ref} from "vue";
  import formCreate from "@form-create/element-ui";
  
  const option = ref(formCreate.parseJson('{"form":{"inline":false,"hideRequiredAsterisk":false,"labelPosition":"right","size":"default","labelWidth":"125px"},"resetBtn":{"show":false,"innerText":"Reset"},"submitBtn":{"show":false,"innerText":"Submit"}}'));
  const rule = ref(formCreate.parseJson('[{"type":"input","field":"Code","title":"Mã loại thẻ","info":"","$required":"Mã loại thẻ không được để trống","_fc_id":"id_Fxvpm208aq1eaqc","name":"ref_Fe5xm2087yvsaoc","display":true,"hidden":false,"_fc_drag_tag":"input","props":{"clearable":false}},{"type":"input","field":"CardTypeName","title":"Tên loại thẻ","info":"","$required":"Tên loại thẻ không được để trống","_fc_id":"id_Fmttm208ed58axc","name":"ref_Fe5xm2087yvsaoc","display":true,"hidden":false,"_fc_drag_tag":"input"},{"type":"fcRow","children":[{"type":"col","props":{"span":8,"offset":0},"children":[{"type":"inputNumber","field":"CostLevel","title":"Mức chi phí","info":"","$required":false,"props":{"min":0},"_fc_id":"id_Fecgm230ht46b9c","name":"ref_Fxcim230ht46bac","display":true,"hidden":false,"_fc_drag_tag":"inputNumber"}],"_fc_id":"id_F7sgm230n0hhbdc","name":"ref_F9gim230n0hhbec","display":true,"hidden":false,"_fc_drag_tag":"col"},{"type":"col","props":{"span":15,"offset":0,"pull":0,"push":1},"children":[{"type":"select","field":"CurrencyID","title":"","info":"","$required":false,"_fc_id":"id_Frlxm208c1tnauc","name":"ref_F2c2m21r1a57afc","display":true,"hidden":false,"_fc_drag_tag":"select","effect":{"fetch":{"parse":"[[FORM-CREATE-PREFIX-function parse(res){// Kiểm tra res có dữ liệu hay không (null, undefined, hoặc không phải là mảng)\\n    if (!res || !Array.isArray(res)) {\\n        return []; // Trả về một mảng rỗng nếu dữ liệu không hợp lệ\\n    }\\n\\n    // Nếu res có dữ liệu hợp lệ, tiếp tục xử lý\\n    return res.map(item => {\\n        return {\\n            value: item.ID || \'\',  \\n            label: item.CurrencyName || \'\' \\n        };\\n    });}-FORM-CREATE-SUFFIX]]","onError":"","to":"options","action":"http://172.21.30.86:7534/Cat_GetData/GetMultiCurrency","method":"GET","headers":{},"data":{}}},"props":{"_optionType":1,"clearable":true,"multiple":false,"collapseTags":false,"filterable":true,"reserveKeyword":false,"defaultFirstOption":true,"remoteMethod":"$FNX:// Lấy từ khóa tìm kiếm\\n  const query = $inject.args[0];\\n\\t\\n  if (query) {    \\n    const _self = $inject.self;\\n\\t\\tconst _action = `http://172.21.30.86:7534/Cat_GetData/GetMultiCurrency?text=${query}`;\\n    \\n    if(_self.effect){\\n    \\t_self.effect.fetch.action = _action;\\n    }\\n    else{\\n    \\tconst _fetch={\\n      \\taction: _action,\\n        data: {},\\n        headers: {},\\n        method: \'GET\',\\n        to: \'options\',\\n        parse: function(res){\\n          \\n        \\tif(res){\\n          \\treturn res.map(item => {\\n              return {\\n                  value: item.ID || \'\',  \\n                  label: item.CurrencyName || \'Unknown\' \\n              };\\n    });\\n          }\\n        },\\n        onError:\\"\\"\\n      };\\n      \\n      _self.effect={\\n      \\tfetch: _fetch\\n      }             \\n    }\\n  }","remote":true,"placeholder":"Vui lòng chọn"},"on":{"change":"$FNX:console.log($inject.self.value)"}}],"_fc_id":"id_F9n8m230n0hibfc","name":"ref_F7dpm230n0hibgc","display":true,"hidden":false,"_fc_drag_tag":"col"}],"_fc_id":"id_F49lm230n0hhbbc","name":"ref_F0c8m230n0hhbcc","display":true,"hidden":false,"_fc_drag_tag":"fcRow","props":{"type":"default"}},{"type":"input","field":"Notes","title":"Ghi chú","info":"","$required":false,"props":{"type":"textarea"},"_fc_id":"id_Fx1pm230xbt5cic","name":"ref_Fk3wm230xbt5cjc","display":true,"hidden":false,"_fc_drag_tag":"textarea"}]'));
  const fapi = ref(null);
  const formData = ref({});
  
  const onSubmit =  (formData) => {
    //todo 提交表单
  }
  </script>