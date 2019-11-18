<template>
    <div class="content-wrapper">
        <section class="content">
            <div class="row my-4">
                <div id="pai" class="d-flex flex-column align-items-center col-7">
                    <div class="btn-group clockpicker my-2 mx-2 d-flex ">
                        <input type="text" class="form-control form-control-sm input-clock" 
                            v-model="clock[0]"
                            >
                        <button class="btn btn-secondary btn-sm input-group-addon" >
                            <i class="fa fa-clock"></i>
                        </button>
                    </div>
                </div>
                <div class="col-4">
                    <button class="btn btn-primary"  data-toggle="tooltip" @click="makeInput" 
                        data-placement="top" title="Tooltip on top">Novo input
                    </button>
                    <div>
                        <p v-for="(c, i ) in clock" :key="i">clock {{i}} - {{c}}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import '../../../public/clockpicker'

export default {
    data() {
        return {
            clock: ["12:45"],
        }
    },

    methods: {
        makeInput() {
            // const self = this
            let lengthClock = this.clock.length
            // console.log(lengthClock)

            const pai = document.getElementById('pai')
            const novaDiv = document.createElement('div')
            novaDiv.className = "btn-group clockpicker my-2 mx-2"

            const elementoClone = document.querySelector('.input-clock').cloneNode(true)
            this.clock.push(elementoClone.value)

            elementoClone.oninput = (e) => {
                this.clock[lengthClock] = e.target.value
            }

            elementoClone.value = this.clock[lengthClock]

            novaDiv.appendChild(elementoClone)
            pai.appendChild(novaDiv)

            $('.clockpicker').clockpicker({
                placement: "bottom",
                autoclose: true,
                align: "top"
            });

        }
    },

	mounted() {
        $('.clockpicker').clockpicker({
            placement: "bottom",
            autoclose: true,
            align: "top"
        });
        
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })

        // setInterval(() => {
        //     this.clock = document.querySelector('.input-clock').value
            

        //     console.log(this.clock)
        // }, 1000)
    },
}
</script>

<style>
@import '../../../public/clockpicker.css';
</style>