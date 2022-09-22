import { PrismaClient } from "@prisma/client";
import { genres } from "./genres";

const prisma = new PrismaClient();



async function main() {

	for (let genre of genres) {
		await prisma.genre.create({
			data: genre
		})
	}

	await prisma.movie.create({
		data: {
			title: "Toy Story",
			rating: 4.6,
			genres: {
				connect: [{ id: 2 }, { id: 4 }, { id: 6 }]
			}
		}
	})

	await prisma.movie.create({
		data: {
			title: "Marvel's The Avengers",
			rating: 4.4,
			genres: {
				connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
			}
		}
	})

	await prisma.movie.create({
		data: {
			title: "Monsters, Inc.",
			rating: 4.5,
			genres: {
				connect: [{ id: 2 }, { id: 4 }, { id: 6 }]
			}
		}
	})

	await prisma.movie.create({
		data: {
			title: "Avengers: End Game",
			rating: 4.5,
			genres: {
				connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
			}
		}
	})

	await prisma.movie.create({
		data: {
			title: "Capitán América: el primer vengador",
			rating: 3.7,
			genres: {
				connect: [{ id: 1 }, { id: 2 }, { id: 4 }]
			}
		}
	})

	/* Characters */

	await prisma.character.create({
		data: {
			image: "iron_man.jpg",
			name: "Tony Stark",
			age: 52,
			weight: 102.06,
			info: "Tony Stark es un genio inventor y multimillonario industrial, que se enfunda en su armadura de tecnología punta para convertirse en el superhéroe Iron Man. Hijo adoptivo del fabricante de armas Howard Stark, Tony heredó la empresa de su familia a una edad temprana tras la muerte de sus padres.",
			movies: {
				connect: [ {id: 2}, {id: 4}  ]
			}
		}
	})

	await prisma.character.create({
		data: {
			image: "captain_america.jpg",
			name: "Steven Rogers",
			age: 99,
			weight: 108.66,
			info: "Cpt. Steven Rogers también conocido como Captain America, el primer vengador, fue rechazado por el Ejército de los Estados Unidos durante la Segunda Guerra Mundial debido a numerosos problemas de salud. Finalmente se ofreció como voluntario para el Proyecto Renacimiento donde recibió el Suero del Súper Soldado desarrollado por Dr. Abraham Erskine.",
			movies: {
				connect: [ {id: 2}, {id: 4}, {id: 5}  ]
			}
		}
	})

	await prisma.character.create({
		data: {
			image: "nick_fury.jpg",
			name: "Nick Fury",
			age: 72,
			weight: 102.25,
			info: 'Nick Fury era el jefe ejecutivo de Strategic Homeland Intervention Enforcement Logistics Division, conocida internacional y públicamente como "S.H.I.E.L.D.". Furia también se acredita como posible cocreador/diseñador de la Iniciativa Vengadora, así como comandante de operaciones especiales.',
			movies: {
				connect: [ {id: 2}, {id: 5}  ]
			}
		}
	})

	await prisma.character.create({
		data: {
			image: "andy.jpg",
			name: "Andy Davis",
			age: 6,
			weight: 26.50,
			info: 'Es un buen niño, es hermano mayor de Molly y el hijo de la Sra. Davis. En Toy Story, Andy cumple años y le regalan un Buzz Lightyear de juguete que hace que Woody se ponga celoso.',
			movies: {
				connect: [ {id: 1} ]
			}
		}
	})

	await prisma.character.create({
		data: {
			image: "mikek.jpg",
			name: "Mike Wazowski",
			age: 28,
			weight: 17.50,
			info: 'Michael "Mike" Wazowski es el deuteragonista de Monsters, Inc. y el protagonista de la precuela Monsters University. Él es un monstruo esférico de color verde claro con un solo ojo grande, que tiene dos pequeños cuernos en la cabeza y brazos y piernas delgados ajuntados a cada lado de su torso.',
			movies: {
				connect: [ {id: 3} ]
			}
		}
	})

}

main().catch(error => {
	console.log(error);
	process.exit(1);
}).finally(() => {
	prisma.$disconnect;
})