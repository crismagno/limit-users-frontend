<template>
    <div class="content-wrapper">
        <section class="content">
            <h1>Integrações</h1>
            <div class="row div-whatsapps">
                <div :class="`d-flex flex-row align-items-center 
                    justify-content-start col-11`">

                    <div class="div-elements-overflow d-flex">
                        <div class="d-flex align-items-center" 
                            v-for="(value, chave, i) in arrayWhatsapp[0]" 
                            :key="i">
                            <img src="@/assets/images/whatsapp2.png" width="35" height="25"/>    
                            <input type="text" class="form-control " 
                                v-model="value.label">   
                        </div>
                    </div>
                </div>

                <div class="col-1 d-flex flex-column">
                    <button class="btn btn-primary btn-radius " 
                        @click="insertIntegration('whatsapp')">
                        <i class="fa fa-plus"></i> 
                    </button>
                    <button class="btn btn-danger btn-radius my-1 " 
                        @click="deleteIntegration('whatsapp')">
                        <i class="fa fa-trash"></i>
                    </button>
                    <!-- <button class="btn btn-success " 
                        @click="aceptIntegrations()">
                        <i class="fa fa-check"></i>
                    </button> -->
                </div>
            </div>
            <!--row whatsapps-->

            <div class="row div-instagrams my-4">
                <div :class="`d-flex flex-row align-items-center 
                    justify-content-start col-11`">

                    <div class="form-group d-flex align-items-center" 
                        v-for="(value, chave, i) in arrayInstagram[0]" 
                        :key="i">
                        <!-- {{value.label}} -->
                        <img src="@/assets/images/instagram.png" width="25" height="25"/>    
                        <input type="text" class="form-control mx-2" 
                            v-model="value.label">
                    </div>

                    
                </div>

                <div class="col-1 d-flex flex-column">
                    <button class="btn btn-primary btn-radius" 
                        @click="insertIntegration('instagram')">
                        <i class="fa fa-plus"></i> 
                    </button>
                    <button class="btn btn-danger btn-radius my-1 " 
                        @click="deleteIntegration('instagram')">
                        <i class="fa fa-trash"></i>
                    </button>
                    <!-- <button class="btn btn-success " 
                        @click="aceptIntegrations()">
                        <i class="fa fa-check"></i>
                    </button> -->
                </div>
            </div>
            <!--row instagrams-->

            <div class="row div-widgets">
                <div :class="`d-flex flex-row align-items-center 
                    justify-content-start col-11`">

                    <div class="form-group d-flex align-items-center" 
                        v-for="(value, chave, i) in arrayWidget[0]" 
                        :key="i">
                        <!-- {{value.label}} -->
                        
                        <img src="@/assets/images/widget.png" width="25" height="25"/>
                        <input type="text" class="form-control mx-2" 
                            v-model="value.label">
                    </div>

                    
                </div>

                <div class="col-1 d-flex flex-column">
                    <button class="btn btn-primary btn-radius" 
                        @click="insertIntegration('widget')">
                        <i class="fa fa-plus"></i> 
                    </button>
                    <button class="btn btn-danger btn-radius my-1 " 
                        @click="deleteIntegration('widget')">
                        <i class="fa fa-trash"></i>
                    </button>
                    <!-- <button class="btn btn-success " 
                        @click="aceptIntegrations()">
                        <i class="fa fa-check"></i>
                    </button> -->
                </div>
            </div>
            <!--row widgets-->

            <div class="row d-flex justify-content-center">
                <button class="btn btn-success m-3" style="width:70%" 
                @click="aceptIntegrations()">
                <i class="fa fa-check"></i>
            </button> 
            </div>
        </section>
    </div>
</template>

<script>
import '../../../public/clockpicker'

export default {
    data() {
        return {
            company: {
                instagrams: {
                    "integration-1": {
                        access_token: "",
                        label: "instagram-1"
                    }
                },

                whatsapps: {
                    "integration-1": {
                        access_token: "",
                        label: "whatsapp-1",
                        connection: 0,
                        session: 0
                    }
                },

                widgets: {
                    "integration-1": {
                        label: "widget-1",
                    }
                }
            },


            arrayInstagram: [],
            arrayWhatsapp: [],
            arrayWidget: []
        }
    },

    methods: {

        insertIntegration(wiw) {
            if (wiw == 'whatsapp') {//whatsapps
                const whatsappsLength = 
                Object.keys(this.company.whatsapps).length
            
                this.company.whatsapps[`integration-${whatsappsLength + 1}`] = {
                    access_token: "",
                    label: `whatsapp-${whatsappsLength + 1}`,
                    connection: 0,
                    session: 0
                }

                this.arrayWhatsapp = [{...this.company.whatsapps}]

            } else if(wiw == 'instagram'){//instagrams
                const instagramsLength = 
                Object.keys(this.company.instagrams).length
            
                this.company.instagrams[`integration-${instagramsLength + 1}`] = {
                    access_token: "",
                    label: `instagram-${instagramsLength + 1}`
                }

                this.arrayInstagram = [{...this.company.instagrams}]

            } else if (wiw == 'widget') {//widgets
                const widgetsLength = 
                Object.keys(this.company.widgets).length
            
                this.company.widgets[`integration-${widgetsLength + 1}`] = {
                    label: `instagram-${widgetsLength + 1}`
                }

                this.arrayWidget = [{...this.company.widgets}]
            }
        }, 

        deleteIntegration(wiw) {
            if (wiw == 'whatsapp') {//whatsapp
                const lengthElement = 
                    Object.keys(this.company.whatsapps).length-1
                const elementDelete = 
                    Object.keys(this.company.whatsapps)[lengthElement]

                delete this.company.whatsapps[elementDelete]
                delete this.arrayWhatsapp[0][elementDelete]

                this.arrayWhatsapp = [{...this.company.whatsapps}]
                
            } else if (wiw == 'instagram') {//instagram
                const lengthElement = 
                Object.keys(this.company.instagrams).length-1
                const elementDelete = 
                    Object.keys(this.company.instagrams)[lengthElement]

                delete this.company.instagrams[elementDelete]
                delete this.arrayInstagram[0][elementDelete]

                this.arrayInstagram = [{...this.company.instagrams}]

            } else if (wiw == 'widget') {//widget
                const lengthElement = 
                Object.keys(this.company.widgets).length-1
                const elementDelete = 
                    Object.keys(this.company.widgets)[lengthElement]

                delete this.company.widgets[elementDelete]
                delete this.arrayWidget[0][elementDelete]

                this.arrayWidget = [{...this.company.widgets}]
            }
        },

        aceptIntegrations(){
            if (Object.keys(this.company.instagrams).length == 0) {
                delete this.company.instagrams
            } else {
                this.company.instagrams = { ...this.arrayInstagram[0] }
            }
            if (Object.keys(this.company.whatsapps).length == 0) {
                delete this.company.whatsapps
            } else {
                this.company.whatsapps = { ...this.arrayWhatsapp[0] }
            }
            
            if (Object.keys(this.company.widgets).length == 0) {
                delete this.company.widgets
            } else {
                this.company.widgets = { ...this.arrayWidget[0] }
            }
            console.log(this.company)
            
        }
    },

    mounted() {
        if (this.company.instagrams) {
            this.arrayInstagram = [{...this.company.instagrams}]
        } else {
            this.company.instagrams = {}
            this.arrayInstagram = [{...this.company.instagrams}]
        }

        if (this.company.whatsapps) {
            this.arrayWhatsapp = [{...this.company.whatsapps}]
        } else {
            this.company.whatsapps = {}
            this.arrayWhatsapp = [{...this.company.whatsapps}]
        }

        if (this.company.widgets) {
            this.arrayWidget = [{...this.company.widgets}]
        } else {
            this.company.widgets = {}
            this.arrayWidget = [{...this.company.widgets}]
        }
    }
}
</script>

<style scoped>
@import '../../../public/clockpicker.css';

p {
    border: 1px solid black;
    overflow: hidden;
}

.div-whatsapps {
    margin: 5px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 1px 1px 5px 1px rgb(160, 243, 160),
                -5px -5px 2px 1px rgb(160, 243, 160);
}

.div-instagrams {
    margin: 5px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 1px 1px 1px 1px rgb(240, 82, 103),
                -5px -5px 0px 0px rgb(243, 160, 185);
}

.div-widgets {
    margin: 5px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 1px 1px 5px 1px rgb(66, 172, 243),
                -5px -5px 2px 1px rgb(81, 172, 247);
}

.btn-radius {
    width: 40px;
    height: 40px;
    border-radius: 20px;
}

.div-elements-overflow {
    border: 1px solid red;
    width: 100%;
    overflow-y: hidden;
}

.form-group {
    width: 200px;
}

.form-control {
    width: 200px;
}
</style>