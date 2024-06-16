import PlayerModel from "../models/player-models";
import statisticsModel from "../models/statistics-model";

const database: PlayerModel[] = [
    {
        id: 1,
        name: "messi",
        club: "barcelona",
        nationality: "argentina",
        position: "forward",
        statistics: {
            overall: 90,
            pace: 89,
            shooting: 86,
            passing: 76,
            dribbling: 93,
            defending: 40,
            physical: 80,

        },
    },
    {
        "id": 2,
        "name": "Cristiano Ronaldo",
        "club": "Juventus",
        "nationality": "Portugal",
        "position": "forward",
        "statistics": {
            "overall": 91,
            "pace": 90,
            "shooting": 92,
            "passing": 81,
            "dribbling": 88,
            "defending": 35,
            "physical": 85
        }
    },
    {
        "id": 3,
        "name": "Robert Lewandowski",
        "club": "Bayern Munich",
        "nationality": "Poland",
        "position": "forward",
        "statistics": {
            "overall": 92,
            "pace": 78,
            "shooting": 94,
            "passing": 79,
            "dribbling": 85,
            "defending": 43,
            "physical": 82
        }
    },
    {
        "id": 4,
        "name": "Kevin De Bruyne",
        "club": "Manchester City",
        "nationality": "Belgium",
        "position": "midfielder",
        "statistics": {
            "overall": 91,
            "pace": 76,
            "shooting": 86,
            "passing": 93,
            "dribbling": 87,
            "defending": 64,
            "physical": 78
        }
    },
    {
        "id": 5,
        "name": "Virgil van Dijk",
        "club": "Liverpool",
        "nationality": "Netherlands",
        "position": "defender",
        "statistics": {
            "overall": 90,
            "pace": 75,
            "shooting": 60,
            "passing": 72,
            "dribbling": 70,
            "defending": 92,
            "physical": 86
        }
    },
    {
        "id": 6,
        "name": "Neymar Jr.",
        "club": "Paris Saint-Germain",
        "nationality": "Brazil",
        "position": "forward",
        "statistics": {
            "overall": 91,
            "pace": 91,
            "shooting": 85,
            "passing": 86,
            "dribbling": 95,
            "defending": 35,
            "physical": 59
        }
    },
    {
        "id": 7,
        "name": "Sergio Ramos",
        "club": "Real Madrid",
        "nationality": "Spain",
        "position": "defender",
        "statistics": {
            "overall": 89,
            "pace": 71,
            "shooting": 66,
            "passing": 76,
            "dribbling": 73,
            "defending": 88,
            "physical": 84
        }
    },
    {
        "id": 8,
        "name": "Kylian Mbappé",
        "club": "Paris Saint-Germain",
        "nationality": "France",
        "position": "forward",
        "statistics": {
            "overall": 91,
            "pace": 96,
            "shooting": 86,
            "passing": 78,
            "dribbling": 91,
            "defending": 36,
            "physical": 76
        }
    },
    {
        "id": 9,
        "name": "Luka Modrić",
        "club": "Real Madrid",
        "nationality": "Croatia",
        "position": "midfielder",
        "statistics": {
            "overall": 89,
            "pace": 74,
            "shooting": 76,
            "passing": 89,
            "dribbling": 90,
            "defending": 72,
            "physical": 66
        }
    },
    {
        "id": 10,
        "name": "Sadio Mané",
        "club": "Liverpool",
        "nationality": "Senegal",
        "position": "forward",
        "statistics": {
            "overall": 90,
            "pace": 94,
            "shooting": 85,
            "passing": 80,
            "dribbling": 89,
            "defending": 44,
            "physical": 75
        }
    },
    {
        "id": 11,
        "name": "Mohamed Salah",
        "club": "Liverpool",
        "nationality": "Egypt",
        "position": "forward",
        "statistics": {
            "overall": 90,
            "pace": 93,
            "shooting": 86,
            "passing": 81,
            "dribbling": 90,
            "defending": 45,
            "physical": 74
        }
    },
    {
        "id": 12,
        "name": "Alisson Becker",
        "club": "Liverpool",
        "nationality": "Brazil",
        "position": "goalkeeper",
        "statistics": {
            "overall": 90,
            "pace": 50,
            "shooting": 40,
            "passing": 65,
            "dribbling": 55,
            "defending": 90,
            "physical": 85
        }
    },
    {
        "id": 13,
        "name": "Jan Oblak",
        "club": "Atlético Madrid",
        "nationality": "Slovenia",
        "position": "goalkeeper",
        "statistics": {
            "overall": 91,
            "pace": 50,
            "shooting": 40,
            "passing": 65,
            "dribbling": 55,
            "defending": 92,
            "physical": 83
        }
    },
    {
        "id": 14,
        "name": "Joshua Kimmich",
        "club": "Bayern Munich",
        "nationality": "Germany",
        "position": "midfielder",
        "statistics": {
            "overall": 89,
            "pace": 74,
            "shooting": 71,
            "passing": 86,
            "dribbling": 84,
            "defending": 85,
            "physical": 80
        }
    },
    {
        "id": 15,
        "name": "Eden Hazard",
        "club": "Real Madrid",
        "nationality": "Belgium",
        "position": "forward",
        "statistics": {
            "overall": 88,
            "pace": 84,
            "shooting": 82,
            "passing": 84,
            "dribbling": 91,
            "defending": 35,
            "physical": 66
        }
    },
    {
        "id": 16,
        "name": "Thiago Silva",
        "club": "Chelsea",
        "nationality": "Brazil",
        "position": "defender",
        "statistics": {
            "overall": 86,
            "pace": 61,
            "shooting": 55,
            "passing": 71,
            "dribbling": 70,
            "defending": 87,
            "physical": 79
        }
    },
    {
        "id": 17,
        "name": "Toni Kroos",
        "club": "Real Madrid",
        "nationality": "Germany",
        "position": "midfielder",
        "statistics": {
            "overall": 88,
            "pace": 58,
            "shooting": 82,
            "passing": 92,
            "dribbling": 81,
            "defending": 68,
            "physical": 69
        }
    },
    {
        "id": 18,
        "name": "Erling Haaland",
        "club": "Borussia Dortmund",
        "nationality": "Norway",
        "position": "forward",
        "statistics": {
            "overall": 88,
            "pace": 89,
            "shooting": 87,
            "passing": 65,
            "dribbling": 80,
            "defending": 45,
            "physical": 85
        }
    },
    {
        "id": 19,
        "name": "Romelu Lukaku",
        "club": "Inter Milan",
        "nationality": "Belgium",
        "position": "forward",
        "statistics": {
            "overall": 87,
            "pace": 85,
            "shooting": 84,
            "passing": 71,
            "dribbling": 76,
            "defending": 38,
            "physical": 87
        }
    },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player)
};

export const deletePlayer = async (id: number) => {
    const index = database.findIndex(player => player.id === id);

    if (index !== -1) {
        database.splice(index, 1);
        return true;
    }

    return false;
};

export const FindAndUpdatePlayer = async (id: number, statistics: statisticsModel): Promise<PlayerModel> => {
    const playerIndex = database.findIndex((player) => player.id === id);

    if (playerIndex !== -1) {
        database[playerIndex].statistics = statistics;
    }

    return database[playerIndex];
};
