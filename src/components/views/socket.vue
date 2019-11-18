<template>
	<!-- Content Wrapper. Contains page content -->
	<div class="content-wrapper">
		<!-- Main content -->
		<section class="content">
			<div class="container-fluid">
				<div class="row">
					<div class="main-conversas ">
						<div class="conversas">
							<input type="text" class="form-control my-2" v-model="autor" 
								placeholder="Autor">
							<div class="messages">

							</div>
							<input type="text" class="form-control my-2" 
								v-model="mensagem" 
								placeholder="Escrever...">
							<button class="btn btn-primary my-2" @click="enviar()">
								<i class="fa fa-upload mr-1"></i>Enviar
							</button>
							<button class="btn btn-danger my-2" @click="deletar()">
								<i class="fa fa-trash mr-1"></i>Deletar
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- /.content -->
	</div>
	<!-- /.content-wrapper -->
</template>

<script>
export default {

	data() {
		return {
			autor: 'Cristhofer',
			mensagem: '',
			socket: null
		}
	},
	
	methods: {
		enviar() { 
			const data = {
				autor: this.autor, 
				mensagem: this.mensagem}

			this.renderMessages(data)
			this.socket.emit('sendMessage', data)
		},

		deletar() {
			this.socket.emit('deleteMessages')
		},

		renderMessages(message) {
			$('.messages').append(`<div class="div-message"><strong>${message.autor}:</strong> 
				<span class="message">${message.mensagem}</span></div>`)
		}
	},

	mounted() {

		this.socket = io.connect('http://localhost:3005')

		this.socket.on('receivedMessage', data => {
			this.renderMessages(data)
		})

		this.socket.on('previousMessages', data => {
			for (const message of data) {
				this.renderMessages(message)
			}
		})

		this.socket.on('messagesDeleted', data => {
			for (const message of data) {
				this.renderMessages(message)
			}
		})
	},
};
</script>

<style scoped>

.content-wrapper {
	background: #0002
}

.main-conversas {
	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	width: 100%;
	/* border: 1px solid red; */
}

.conversas {
    /* margin-top: 150px; */
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 500px;
    padding: 10px;
	
}

.messages {
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #fff;
    border: 1px solid #0002;
    width: 100%;
    height: 400px;
	overflow-x: hidden; 
	box-sizing: border-box;
}

.div-message, .message {
	
	background-color: aquamarine;
	/* flex-wrap: wrap; */
	width: 200px;
	border: 1px solid red;
	box-sizing: border-box;
}
</style>