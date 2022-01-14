<template>
  <base-body>
    <template #head>
      <h1 class="tit-1">
        기본 정보를 입력 후,<br />
        회원가입을 완료해주세요
      </h1>
    </template>
    <template #contents>
      <form action="#" @submit.prevent="submitData">
        <form-item>
          <template #key>이름</template>
          <template #value>
            <form-input :object="name" v-model="name.value" />
          </template>
        </form-item>
        <form-item>
          <template #key>휴대폰 번호</template>
          <template #value>
            <form-input :object="cell" v-model="cell.value" />
          </template>
        </form-item>
        <form-item>
          <template #key>아이디</template>
          <template #value>
            <form-input :object="id" v-model="id.value" />
            <ul class="dot-list">
              <li>아이디는 최소 3글자 이상 입력해주세요.</li>
            </ul>
          </template>
        </form-item>
        <form-item>
          <template #key>비밀번호</template>
          <template #value>
            <form-input :object="password" v-model="password.value" />
            <ul class="dot-list">
              <li>
                비밀번호는 영문/숫자/특수문자 2가지 이상 조합으로 6~12자이어야
                합니다.
              </li>
            </ul>
          </template>
        </form-item>
        <form-item>
          <template #key>비밀번호 확인</template>
          <template #value>
            <form-input
              :object="passwordConfirm"
              v-model="passwordConfirm.value"
            />
            <ul class="dot-list">
              <li>
                비밀번호는 영문/숫자/특수문자 2가지 이상 조합으로 6~12자이어야
                합니다.
              </li>
            </ul>
          </template>
        </form-item>
        <form-item>
          <template #key>이메일</template>
          <template #value>
            <div class="row">
              <form-input :object="emailId" v-model="emailId.value" />
              <form-select :options="emailDomain" v-model="emailDomain.value" />
            </div>
            <ul class="dot-list">
              <li>
                비밀번호는 영문/숫자/특수문자 2가지 이상 조합으로 6~12자이어야
                합니다.
              </li>
            </ul>
          </template>
        </form-item>
        <form-item>
          <template #key>채팅상담 가능 시간</template>
          <template #value>
            <div class="row">
              <checkbox-list>
                <template #checkall>
                  <form-checkbox-all
                    v-if="!$store.state.isMobile"
                    class="box"
                    v-model="chatTime.days.all"
                    :baseList="chatTime.days.list"
                    :checkedList.sync="chatTime.days.checked"
                    :disabled="chatTime.days.allDisabled"
                  >
                    <template #text> 전체 </template>
                  </form-checkbox-all>
                </template>
                <template #checklist>
                  <form-checkbox
                    class="box"
                    v-for="item in chatTime.days.list"
                    v-model="chatTime.days.checked"
                    :allCheck="chatTime.days.all"
                    :val="item"
                    :baseList="chatTime.days.list"
                    :disabled="item.disabled"
                    :key="item.id"
                  >
                    <template #text> {{ item.value }} </template>
                  </form-checkbox>
                </template>
              </checkbox-list>
              <form-select
                :options="chatTime.startTime"
                v-model="chatTime.startTime.value"
                :disabled="chatTime.startTime.disabled"
              />
              <form-select
                :options="chatTime.endTime"
                v-model="chatTime.endTime.value"
                :disabled="chatTime.endTime.disabled"
              />
            </div>
            <div class="row">
              <form-checkbox v-model="chatTime.disabled">
                <template #text> 채팅상담을 진행하지 않습니다. </template>
              </form-checkbox>
            </div>
          </template>
        </form-item>
        <form-item>
          <template #key>화상상담 가능 시간</template>
          <template #value>
            <div class="row">
              <form-checkbox-all
                v-if="!$store.state.isMobile"
                class="box"
                v-model="videoTime.days.all"
                :baseList="videoTime.days.list"
                :checkedList.sync="videoTime.days.checked"
                :disabled="videoTime.days.allDisabled"
              >
                <template #text> 전체 </template>
              </form-checkbox-all>
              <checkbox-list>
                <template #checklist>
                  <form-checkbox
                    class="box"
                    v-for="item in videoTime.days.list"
                    v-model="videoTime.days.checked"
                    :allCheck="videoTime.days.all"
                    :val="item"
                    :baseList="videoTime.days.list"
                    :disabled="item.disabled"
                    :key="item.id"
                  >
                    <template #text> {{ item.value }} </template>
                  </form-checkbox>
                </template>
              </checkbox-list>
              <form-select
                :options="videoTime.startTime"
                v-model="videoTime.startTime.value"
                :disabled="videoTime.startTime.disabled"
              />
              <form-select
                :options="videoTime.endTime"
                v-model="videoTime.endTime.value"
                :disabled="videoTime.endTime.disabled"
              />
            </div>
            <div class="row">
              <form-checkbox v-model="videoTime.disabled">
                <template #text> 화상상담을 진행하지 않습니다. </template>
              </form-checkbox>
            </div>
          </template>
        </form-item>
        <form-item>
          <template #key>전화상담 가능 시간</template>
          <template #value>
            <div class="row">
              <form-checkbox-all
                v-if="!$store.state.isMobile"
                class="box"
                v-model="callTime.days.all"
                :baseList="callTime.days.list"
                :checkedList.sync="callTime.days.checked"
                :disabled="callTime.days.allDisabled"
              >
                <template #text> 전체 </template>
              </form-checkbox-all>
              <checkbox-list>
                <template #checklist>
                  <form-checkbox
                    class="box"
                    v-for="item in callTime.days.list"
                    v-model="callTime.days.checked"
                    :allCheck="callTime.days.all"
                    :val="item"
                    :baseList="callTime.days.list"
                    :disabled="item.disabled"
                    :key="item.id"
                  >
                    <template #text> {{ item.value }} </template>
                  </form-checkbox>
                </template>
              </checkbox-list>
              <form-select
                :options="callTime.startTime"
                v-model="callTime.startTime.value"
                :disabled="callTime.startTime.disabled"
              />
              <form-select
                :options="callTime.endTime"
                v-model="callTime.endTime.value"
                :disabled="callTime.endTime.disabled"
              />
            </div>
            <div class="row">
              <form-checkbox v-model="callTime.disabled">
                <template #text> 전화상담을 진행하지 않습니다. </template>
              </form-checkbox>
            </div>
          </template>
        </form-item>
        <form-item>
          <template #key>대면상담 가능 시간</template>
          <template #value>
            <div class="row">
              <form-checkbox-all
                v-if="!$store.state.isMobile"
                class="box"
                v-model="meetTime.days.all"
                :baseList="meetTime.days.list"
                :checkedList.sync="meetTime.days.checked"
                :disabled="meetTime.days.allDisabled"
              >
                <template #text> 전체 </template>
              </form-checkbox-all>
              <checkbox-list>
                <template #checklist>
                  <form-checkbox
                    class="box"
                    v-for="item in meetTime.days.list"
                    v-model="meetTime.days.checked"
                    :allCheck="meetTime.days.all"
                    :val="item"
                    :baseList="meetTime.days.list"
                    :disabled="item.disabled"
                    :key="item.id"
                  >
                    <template #text> {{ item.value }} </template>
                  </form-checkbox>
                </template>
              </checkbox-list>
              <form-select
                :options="meetTime.startTime"
                v-model="meetTime.startTime.value"
                :disabled="meetTime.startTime.disabled"
              />
              <form-select
                :options="meetTime.endTime"
                v-model="meetTime.endTime.value"
                :disabled="meetTime.endTime.disabled"
              />
            </div>
            <div class="row">
              <form-checkbox v-model="meetTime.disabled">
                <template #text> 대면상담을 진행하지 않습니다. </template>
              </form-checkbox>
            </div>
          </template>
        </form-item>
        <policy-list>
          <template #all>
            <form-checkbox-all
              class="all"
              v-model="policy.all"
              :baseList="policy.list"
              :checkedList.sync="policy.checked"
            >
              <template #text> 모든 약관에 동의합니다 </template>
            </form-checkbox-all>
          </template>
          <template #list>
            <form-checkbox
              class="list"
              v-for="item in policy.list"
              v-model="policy.checked"
              :allCheck="policy.all"
              :val="item"
              :baseList="policy.list"
              :disabled="item.disabled"
              :key="item.id"
            >
              <template #text>
                {{ item.value }}
                <span v-if="item.required" class="mint"> (필수) </span>
              </template>
            </form-checkbox>
          </template>
        </policy-list>
        <flex-btn-wrap>
          <form-button :type="'cancel'"> 취소 </form-button>
          <form-button @click.native="submitData">확인</form-button>
        </flex-btn-wrap>
      </form>
    </template>
  </base-body>
</template>

<script>
import baseBody from "../layout/base-body";
import formItem from "../components/common/form-item.vue";
import formInput from "../components/common/form-input";
import formSelect from "../components/common/form-select";
import formCheckbox from "../components/common/form-checkbox";
import formCheckboxAll from "../components/common/form-checkbox-all";
import formButton from "../components/common/form-button";
import checkboxList from "../components/checkbox-list";
import policyList from "../components/policy-list";
import flexBtnWrap from "../components/flex-btn-wrap";
import * as authApi from "../api/auth";

export default {
  name: "join",
  components: {
    baseBody,
    formItem,
    formInput,
    formSelect,
    formCheckbox,
    formCheckboxAll,
    formButton,
    checkboxList,
    policyList,
    flexBtnWrap,
  },
  data() {
    return {
      name: {
        value: "",
      },
      cell: {
        type: "tel",
        value: "",
      },
      id: {
        value: "",
        placeholder: "아이디를 입력해주세요.",
      },
      password: {
        type: "password",
        value: "",
        placeholder: "비밀번호를 입력해주세요.",
      },
      passwordConfirm: {
        type: "password",
        value: "",
        placeholder: "비밀번호를 한번 더 입력해주세요.",
      },
      emailId: {
        type: "email",
        value: "",
        placeholder: "이메일을 입력해주세요.",
      },
      emailDomain: {
        placeholder: "선택",
        list: [
          {
            id: "email01",
            value: "gmail.com",
          },
          {
            id: "email02",
            value: "naver.com",
          },
          {
            id: "email03",
            value: "daum.com",
          },
        ],
        value: "",
      },
      chatTime: {
        disabled: false,
        days: {
          all: false,
          allDisabled: false,
          list: [
            {
              id: "chatTime01",
              value: "월",
              disabled: true,
            },
            {
              id: "chatTime02",
              value: "화",
              disabled: false,
            },
            {
              id: "chatTime03",
              value: "수",
              disabled: false,
            },
            {
              id: "chatTime04",
              value: "목",
              disabled: false,
            },
            {
              id: "chatTime05",
              value: "금",
              disabled: false,
            },
            {
              id: "chatTime06",
              value: "토",
              disabled: false,
            },
            {
              id: "chatTime07",
              value: "일",
              disabled: false,
            },
          ],
          checked: [],
        },
        startTime: {
          placeholder: "상담 시작 시간",
          list: [
            {
              id: "startTime01",
              value: "10:00",
            },
            {
              id: "startTime02",
              value: "11:00",
            },
            {
              id: "startTime03",
              value: "13:00",
            },
            {
              id: "startTime04",
              value: "14:00",
            },
            {
              id: "startTime05",
              value: "15:00",
            },
          ],
          value: "",
          disabled: false,
        },
        endTime: {
          placeholder: "상담 종료 시간",
          list: [
            {
              id: "endTime01",
              value: "10:00",
            },
            {
              id: "endTime02",
              value: "11:00",
            },
            {
              id: "endTime03",
              value: "13:00",
            },
            {
              id: "endTime04",
              value: "14:00",
            },
            {
              id: "endTime05",
              value: "15:00",
            },
          ],
          value: "",
          disabled: false,
        },
      },
      videoTime: {
        disabled: false,
        days: {
          all: false,
          allDisabled: false,
          list: [
            {
              id: "chatTime01",
              value: "월",
              disabled: false,
            },
            {
              id: "chatTime02",
              value: "화",
              disabled: false,
            },
            {
              id: "chatTime03",
              value: "수",
              disabled: false,
            },
            {
              id: "chatTime04",
              value: "목",
              disabled: false,
            },
            {
              id: "chatTime05",
              value: "금",
              disabled: false,
            },
            {
              id: "chatTime06",
              value: "토",
              disabled: false,
            },
            {
              id: "chatTime07",
              value: "일",
              disabled: false,
            },
          ],
          checked: [],
        },
        startTime: {
          placeholder: "상담 시작 시간",
          list: [
            {
              id: "startTime01",
              value: "10:00",
            },
            {
              id: "startTime02",
              value: "11:00",
            },
            {
              id: "startTime03",
              value: "13:00",
            },
            {
              id: "startTime04",
              value: "14:00",
            },
            {
              id: "startTime05",
              value: "15:00",
            },
          ],
          value: "",
          disabled: false,
        },
        endTime: {
          placeholder: "상담 종료 시간",
          list: [
            {
              id: "endTime01",
              value: "10:00",
            },
            {
              id: "endTime02",
              value: "11:00",
            },
            {
              id: "endTime03",
              value: "13:00",
            },
            {
              id: "endTime04",
              value: "14:00",
            },
            {
              id: "endTime05",
              value: "15:00",
            },
          ],
          value: "",
          disabled: false,
        },
      },
      callTime: {
        disabled: false,
        days: {
          all: false,
          allDisabled: false,
          list: [
            {
              id: "chatTime01",
              value: "월",
              disabled: false,
            },
            {
              id: "chatTime02",
              value: "화",
              disabled: false,
            },
            {
              id: "chatTime03",
              value: "수",
              disabled: false,
            },
            {
              id: "chatTime04",
              value: "목",
              disabled: false,
            },
            {
              id: "chatTime05",
              value: "금",
              disabled: false,
            },
            {
              id: "chatTime06",
              value: "토",
              disabled: false,
            },
            {
              id: "chatTime07",
              value: "일",
              disabled: false,
            },
          ],
          checked: [],
        },
        startTime: {
          placeholder: "상담 시작 시간",
          list: [
            {
              id: "startTime01",
              value: "10:00",
            },
            {
              id: "startTime02",
              value: "11:00",
            },
            {
              id: "startTime03",
              value: "13:00",
            },
            {
              id: "startTime04",
              value: "14:00",
            },
            {
              id: "startTime05",
              value: "15:00",
            },
          ],
          value: "",
          disabled: false,
        },
        endTime: {
          placeholder: "상담 종료 시간",
          list: [
            {
              id: "endTime01",
              value: "10:00",
            },
            {
              id: "endTime02",
              value: "11:00",
            },
            {
              id: "endTime03",
              value: "13:00",
            },
            {
              id: "endTime04",
              value: "14:00",
            },
            {
              id: "endTime05",
              value: "15:00",
            },
          ],
          value: "",
          disabled: false,
        },
      },
      meetTime: {
        days: {
          all: false,
          allDisabled: false,
          list: [
            {
              id: "chatTime01",
              value: "월",
              disabled: false,
            },
            {
              id: "chatTime02",
              value: "화",
              disabled: false,
            },
            {
              id: "chatTime03",
              value: "수",
              disabled: false,
            },
            {
              id: "chatTime04",
              value: "목",
              disabled: false,
            },
            {
              id: "chatTime05",
              value: "금",
              disabled: false,
            },
            {
              id: "chatTime06",
              value: "토",
              disabled: false,
            },
            {
              id: "chatTime07",
              value: "일",
              disabled: false,
            },
          ],
          checked: [],
        },
        disabled: false,
        startTime: {
          placeholder: "상담 시작 시간",
          list: [
            {
              id: "startTime01",
              value: "10:00",
            },
            {
              id: "startTime02",
              value: "11:00",
            },
            {
              id: "startTime03",
              value: "13:00",
            },
            {
              id: "startTime04",
              value: "14:00",
            },
            {
              id: "startTime05",
              value: "15:00",
            },
          ],
          value: "",
          disabled: false,
        },
        endTime: {
          placeholder: "상담 종료 시간",
          list: [
            {
              id: "endTime01",
              value: "10:00",
            },
            {
              id: "endTime02",
              value: "11:00",
            },
            {
              id: "endTime03",
              value: "13:00",
            },
            {
              id: "endTime04",
              value: "14:00",
            },
            {
              id: "endTime05",
              value: "15:00",
            },
          ],
          value: "",
          disabled: false,
        },
      },
      policy: {
        all: false,
        disabled: false,
        error: "필수 약관에 동의해주세요.",
        list: [
          {
            id: "policy01",
            value: "핑글커넥트 이용약관",
            required: true,
            disabled: false,
          },
          {
            id: "policy02",
            value: "개인정보 수집 및 이용 동의",
            required: true,
            disabled: false,
          },
          {
            id: "policy03",
            value: "마케팅/이벤트 정보 수신 동의",
            disabled: false,
          },
        ],
        checked: [],
      },
    };
  },
  watch: {
    "chatTime.disabled"(value) {
      this.usable("chatTime", value);
    },
    "videoTime.disabled"(value) {
      this.usable("videoTime", value);
    },
    "callTime.disabled"(value) {
      this.usable("callTime", value);
    },
    "meetTime.disabled"(value) {
      this.usable("meetTime", value);
    },
  },
  methods: {
    usable(key, value) {
      this[key].days.allDisabled = value;
      this[key].days.list.forEach((el) => {
        el.disabled = value;
      });
      this[key].days.checked = [];
      this[key].startTime.disabled = value;
      this[key].endTime.disabled = value;
    },
    async submitData() {
      const joinInfo = {
        cchId: this.id.value,
        cchPswd: this.password.value,
        clusInfoList: [
          {
            clusCd: "COM00701",
            clusVer: "1.1.1",
            agrYn: true,
          },
        ],
        counselInfo: {
          cfntCnslHrCtt: `${this.meetTime.startTime.value} ~ ${this.meetTime.endTime.value}`,
          cfntCnslWkdCtt: this.meetTime.days.checked,
          cfntCnslUseYn: !this.meetTime.startTime.disabled,
          chtgCnslHrCtt: `${this.chatTime.startTime.value} ~ ${this.chatTime.endTime.value}`,
          chtgCnslWkdCtt: this.chatTime.days.checked,
          chtgUseYn: !this.chatTime.startTime.disabled,
          telCnslHrCtt: `${this.callTime.startTime.value} ~ ${this.callTime.endTime.value}`,
          telCnslWkdCtt: this.callTime.days.checked,
          telCnslUseYn: !this.callTime.startTime.disabled,
          vdeoCnslHrCtt: `${this.videoTime.startTime.value} ~ ${this.videoTime.endTime.value}`,
          vdeoCnslWkdCtt: this.videoTime.days.checked,
          vdeoUseYn: !this.videoTime.startTime.disabled,
        },
        deviceInfo: {
          appMrkgUnqNo: "app marketing unique number",
          appPushKeyVal: "app push key data",
          appVer: "1.1.1",
          instlDtm: "2021-12-03 12:00:00",
          mdelNm: "SM-N981N",
          osCd: "CUS00601",
          osVer: 11,
          uuid: "uuid-uuid-uuid-uuid",
        },
        emlAdr: this.emailId.value + this.emailDomain.value,
        passInfo: {
          brdt: 19900101,
          cchNm: this.name.value,
          ccoCd: "CUS00101",
          ci: "CI String",
          di: "DI String",
          ptblTlno: this.cell.value,
          sexCd: "M",
        },
      };
      const showResult = await authApi.join(joinInfo);
      console.log(showResult);
    },
  },
};
</script>

<style scoped lang="scss"></style>
