<!--
 * @Author       : Eug
 * @Date         : 2021-01-29 18:01:43
 * @LastEditTime : 2021-02-02 16:11:53
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /electron-v2/src/components/eug-city/index.vue
-->
<template>
  <div class="eug-components-city">
      <div class="column justify-around q-pa-xl doc-container" style="height:550px">
        <div class="col-2" v-for="(type, index) in contentTypeList" :key="type">
            <q-select
                :disable="isSelectDis(type, index)"
                :filled="isSelectDis(type, index)"
                :readonly="isSelectDis(type, index)"
                @input="handleSelectChange(type, index)"
                option-value="code"
                option-label="name"
                use-input
                rounded
                outlined
                bottom-slots
                v-model="submitForm[type]"
                :options="contentTypeOpction[type]"
                :label="type | filContent"
                counter
                maxlength="12"
                :dense="dense"
                :options-dense="denseOpts"
            >
                <template v-slot:before>
                    <q-icon name="flight_takeoff" />
                </template>

                <template v-slot:append>
                    <q-icon v-if="submitForm[type] !== ''" name="close" @click.stop="handleClearVal(type, index)" class="cursor-pointer" />
                    <q-icon name="search" @click.stop />
                </template>

                <template v-slot:hint>
                    {{ submitForm[type] && submitForm[type].name || 'Not selected' }}
                </template>
            </q-select>
        </div>
      </div>
  </div>
</template>

<script>
import serverApi from '@/api'
export default {
    data() {
        return {
            submitForm: {
                provinces: '',
                cities: '',
                areas: '',
                streets: '',
                villages: ''
            },
            contentTypeOpction: {
                provinces: [],
                cities: [],
                areas: [],
                streets: [],
                villages: []
            },
            contentTypeList: [
                'provinces',
                'cities',
                'areas',
                'streets',
                'villages'
            ],
            model: null,
            dense: false,
            denseOpts: false
        }
    },
    created() {
        this.handleGetProvincesList()
    },
    filters: {
        filContent(val) {
            return val.toLocaleUpperCase()
        }
    },
    methods: {
        isSelectDis(typ, idx) {
            if (!idx) return false
            if(!this.submitForm[this.contentTypeList[idx -1]]) return true
            return false
        },
        handleClearVal(typ, idx) {
            this.submitForm[typ] = ''
            this.handleResetVal(idx)
        },
        handleSelectChange(typ, idx){
            switch(idx) {
                case 0:
                    this.handleResetVal(idx)
                    this.handleGetCitiesList()
                    break;
                case 1:
                    this.handleResetVal(idx)
                    this.handleGetAreasList()
                    break;
                case 2:
                    this.handleResetVal(idx)
                    this.handleGetStreetsList()
                    break;
                case 3:
                    this.handleResetVal(idx)
                    this.handleGetVillagesList()
                    break;
                default: 
                    break;
            }
        },
        handleResetVal(index) {
            const _keys = this.contentTypeList.filter((itm,idx) => idx > index)
            _keys.forEach(_k => {
                this.submitForm[_k] = ''
            })
        },
        mergeProps() {
            const { provinces, cities, areas, streets } = this.submitForm
            return {
               provinceCode:  provinces && provinces.code || void 0,
               cityCode:  cities && cities.code || void 0,
               areaCode:  areas && areas.code || void 0,
               streetCode:  streets && streets.code || void 0
            }
        },
        async handleGetProvincesList() {
            try {
                let res = await serverApi.GetProvincesList();
                if (res.code === 200) {
                    this.contentTypeOpction.provinces = res.result
                } else {
                    console.log(res.result.msg);
                }
            } catch (error) {
                console.log(error);
                
            }
        },
        async handleGetCitiesList() {
            try {
                let res = await serverApi.GetCitiesList(this.mergeProps());
                if (res.code === 200) {
                    this.contentTypeOpction.cities = res.result
                } else {
                    console.log(res.result.msg);
                }
            } catch (error) {
                console.log(error);
                
            }
        },
        async handleGetAreasList() {
            try {
                let res = await serverApi.GetAreasList(this.mergeProps());
                if (res.code === 200) {
                    this.contentTypeOpction.areas = res.result
                } else {
                    console.log(res.result.msg);
                }
            } catch (error) {
                console.log(error);
                
            }
        },
        async handleGetStreetsList() {
            try {
                let res = await serverApi.GetStreetsList(this.mergeProps());
                if (res.code === 200) {
                    this.contentTypeOpction.streets = res.result
                } else {
                    console.log(res.result.msg);
                }
            } catch (error) {
                console.log(error);
                
            }
        },
        async handleGetVillagesList() {
            try {
                let res = await serverApi.GetVillagesList(this.mergeProps());
                if (res.code === 200) {
                    this.contentTypeOpction.villages = res.result
                } else {
                    console.log(res.result.msg);
                }
            } catch (error) {
                console.log(error);
                
            }
        }
    }
}
</script>

<style>

</style>