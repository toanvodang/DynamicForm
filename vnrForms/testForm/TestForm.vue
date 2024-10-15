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
import {ref, onMounted } from "vue";
import formCreate from "@form-create/element-ui";

// let option = ref([]);
// let rule = ref([]);
// const fapi = ref(null);
// const formData = ref({});

// onMounted(() => {
//     //fetchData(); 
// })
const parseParams=new URLSearchParams(window.location.search);
const getFormName = parseParams && parseParams.get('formname') || parseParams.get('FormName');
debugger

let _option='{"form":{"inline":false,"hideRequiredAsterisk":false,"labelPosition":"right","size":"default","labelWidth":"125px"},"resetBtn":{"show":false,"innerText":"Đặt lại"},"submitBtn":{"show":true,"innerText":"Gửi"}}';
let _rule='[{"type":"input","field":"Code","title":"Mã loại thẻ","info":"","$required":"Mã loại thẻ không được để trống","_fc_id":"id_Fxvpm208aq1eaqc","name":"ref_Fe5xm2087yvsaoc","display":true,"hidden":false,"_fc_drag_tag":"input","props":{"clearable":false}},{"type":"input","field":"CardTypeName","title":"Tên loại thẻ","info":"","$required":"Tên loại thẻ không được để trống","_fc_id":"id_Fmttm208ed58axc","name":"ref_Fe5xm2087yvsaoc","display":true,"hidden":false,"_fc_drag_tag":"input"},{"type":"fcRow","children":[{"type":"col","props":{"span":8,"offset":0},"children":[{"type":"inputNumber","field":"CostLevel","title":"Mức chi phí","info":"","$required":false,"props":{"min":0},"_fc_id":"id_Fecgm230ht46b9c","name":"ref_Fxcim230ht46bac","display":true,"hidden":false,"_fc_drag_tag":"inputNumber"}],"_fc_id":"id_F7sgm230n0hhbdc","name":"ref_F9gim230n0hhbec","display":true,"hidden":false,"_fc_drag_tag":"col"},{"type":"col","props":{"span":15,"offset":0,"pull":0,"push":1},"children":[{"type":"select","field":"CurrencyID","title":"","info":"","$required":false,"_fc_id":"id_Frlxm208c1tnauc","name":"ref_F2c2m21r1a57afc","display":true,"hidden":false,"_fc_drag_tag":"select","effect":{"fetch":{"parse":"[[FORM-CREATE-PREFIX-function parse(res){// Kiểm tra res có dữ liệu hay không (null, undefined, hoặc không phải là mảng)\\n    if (!res || !Array.isArray(res)) {\\n        return []; // Trả về một mảng rỗng nếu dữ liệu không hợp lệ\\n    }\\n\\n    // Nếu res có dữ liệu hợp lệ, tiếp tục xử lý\\n    return res.map(item => {\\n        return {\\n            value: item.ID || \'\',  \\n            label: item.CurrencyName || \'\' \\n        };\\n    });}-FORM-CREATE-SUFFIX]]","onError":"","to":"options","action":"http://172.21.30.86:7534/Cat_GetData/GetMultiCurrency","method":"GET","headers":{},"data":{}}},"props":{"_optionType":1,"clearable":true,"multiple":false,"collapseTags":false,"filterable":true,"reserveKeyword":false,"defaultFirstOption":true,"remoteMethod":"$FNX:// Lấy từ khóa tìm kiếm\\n  const query = $inject.args[0];\\n\\t\\n  if (query) {    \\n    const _self = $inject.self;\\n\\t\\tconst _action = `http://172.21.30.86:7534/Cat_GetData/GetMultiCurrency?text=${query}`;\\n    \\n    if(_self.effect){\\n    \\t_self.effect.fetch.action = _action;\\n    }\\n    else{\\n    \\tconst _fetch={\\n      \\taction: _action,\\n        data: {},\\n        headers: {},\\n        method: \'GET\',\\n        to: \'options\',\\n        parse: function(res){\\n          \\n        \\tif(res){\\n          \\treturn res.map(item => {\\n              return {\\n                  value: item.ID || \'\',  \\n                  label: item.CurrencyName || \'Unknown\' \\n              };\\n    });\\n          }\\n        },\\n        onError:\\"\\"\\n      };\\n      \\n      _self.effect={\\n      \\tfetch: _fetch\\n      }             \\n    }\\n  }","remote":true,"placeholder":"Vui lòng chọn"},"on":{"change":"$FNX:console.log($inject.self.value)"}}],"_fc_id":"id_F9n8m230n0hibfc","name":"ref_F7dpm230n0hibgc","display":true,"hidden":false,"_fc_drag_tag":"col"}],"_fc_id":"id_F49lm230n0hhbbc","name":"ref_F0c8m230n0hhbcc","display":true,"hidden":false,"_fc_drag_tag":"fcRow","props":{"type":"default"}},{"type":"input","field":"Notes","title":"Ghi chú","info":"","$required":false,"props":{"type":"textarea"},"_fc_id":"id_Fx1pm230xbt5cic","name":"ref_Fk3wm230xbt5cjc","display":true,"hidden":false,"_fc_drag_tag":"textarea"}]';

const _optionTemplate = '{"form":{"inline":false,"hideRequiredAsterisk":false,"labelPosition":"right","size":"default","labelWidth":"125px","inlineMessage":true},"globalEvent":{},"globalData":{},"resetBtn":{"show":true,"innerText":"重置"},"submitBtn":{"show":true,"innerText":"提交"}}';
const _ruleTemplate = '[{"type":"input","field":"Fnf4lxvqdnrrdbc","title":"Text box","info":"","$required":true,"_fc_id":"id_F15tlxvqdnrsdcc","name":"ref_Fvjmlxvqdnrsddc","_fc_drag_tag":"input","_hidden":false,"display":true,"hidden":false},{"type":"input","field":"Frnvlxvqdo0ndec","title":"Text Area","info":"","$required":false,"props":{"type":"textarea"},"_fc_id":"id_F2p0lxvqdo0ndfc","name":"ref_Fj0blxvqdo0ndgc","_fc_drag_tag":"textarea","_hidden":false,"display":true,"hidden":false},{"type":"input","field":"Fvjnlxvqdoatdhc","title":"Text Area","info":"","$required":false,"props":{"type":"textarea"},"_fc_id":"id_Fjnslxvqdoatdic","name":"ref_Fgwalxvqdoatdjc","_fc_drag_tag":"textarea","_hidden":false,"display":true,"hidden":false},{"type":"input","field":"F62glxvqdopkdkc","title":"TextBox","info":"","$required":false,"props":{"type":"password"},"_fc_id":"id_F942lxvqdopkdlc","name":"ref_Fvw8lxvqdopkdmc","_fc_drag_tag":"password","_hidden":false,"display":true,"hidden":false},{"type":"inputNumber","field":"Fg6mlxvqdp61dnc","title":"Số","info":"","$required":false,"_fc_id":"id_Fbqzlxvqdp61doc","name":"ref_F59vlxvqdp61dpc","_fc_drag_tag":"inputNumber","_hidden":false,"display":true,"hidden":false},{"type":"radio","field":"Fg6rlxvqdpe9dqc","title":"单选框","info":"","effect":{"fetch":""},"$required":false,"options":[{"label":"选项00","value":1},{"label":"选项01","value":2},{"label":"选项02","value":3}],"_fc_id":"id_Fu7tlxvqdpe9drc","name":"ref_F7u8lxvqdpe9dsc","_fc_drag_tag":"radio","_hidden":false,"display":true,"hidden":false},{"type":"checkbox","field":"Fpz5lxvqdpnwdtc","title":"多选框","info":"","effect":{"fetch":""},"$required":false,"options":[{"label":"选项00","value":1},{"label":"选项01","value":2},{"label":"选项02","value":3}],"_fc_id":"id_Fbtklxvqdpnwduc","name":"ref_Fqpalxvqdpnwdvc","_fc_drag_tag":"checkbox","_hidden":false,"display":true,"hidden":false},{"type":"select","field":"Fnzulxvqdpzcdwc","title":"选择器","info":"","effect":{"fetch":""},"$required":false,"options":[{"label":"选项00","value":1},{"label":"选项01","value":2},{"label":"选项02","value":3}],"_fc_id":"id_Fxd1lxvqdpzddxc","name":"ref_Fjtjlxvqdpzddyc","_fc_drag_tag":"select","_hidden":false,"display":true,"hidden":false},{"type":"switch","field":"Fbk6lxvqdq7edzc","title":"开关","info":"","$required":false,"_fc_id":"id_Fdtflxvqdq7ee0c","name":"ref_Fkeslxvqdq7ee1c","_fc_drag_tag":"switch","_hidden":false,"display":true,"hidden":false},{"type":"rate","field":"F2lzlxvqdqg0e2c","title":"评分","info":"","$required":false,"_fc_id":"id_F0oslxvqdqg0e3c","name":"ref_Fegslxvqdqg0e4c","_fc_drag_tag":"rate","value":0,"_hidden":false,"display":true,"hidden":false}]';
console.log(getFormName,'getFormName')

if (getFormName && getFormName.toLowerCase() == 'cat_cardtype') {
    
}
else if(getFormName && getFormName.toLowerCase() == 'form_demo'){

    _option = _optionTemplate;
    _rule = _ruleTemplate;
}

const  option = ref(formCreate.parseJson(_option));
const  rule = ref(formCreate.parseJson(_rule));
const fapi = ref(null);
const formData = ref({});

const onSubmit =  (formData) => {
  //todo 提交表单
}

</script>