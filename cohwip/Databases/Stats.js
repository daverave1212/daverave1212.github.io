
Races = {
	Bertle : {
		health : 7,
		language : {
			intRequirement	: 2,
			language		: "1 additional Common language"
		},
		skills : {
			acrobatics		: 1,
			perception		: 1,
			craft			: 1,
			animalHandling	: -1,
			deception		: -1,
			history			: -1
		},
		options : {
			stats : {
				fortitude	 : false,
				dexterity	 : true,
				intelligence : true,
				wisdom		 : true,
				charisma	 : true
			},
			saves : {
				dexteritySave : 1
			}
		}
	},
	Dragonborn : {
		health : 6,
		language : {
			intRequirement	: 1,
			language		: "1 additional Common language"
		},
		skills : {
			arcana		 : 1,
			athletics	 : 1,
			intimidation : 1,
			stealth		 : -1,
			luck		 : -1,
			nature		 : -1
		},
		options : {
			stats : {
				fortitude	 : true,
				dexterity	 : false,
				intelligence : true,
				wisdom		 : true,
				charisma	 : true
			},
			saves : {
				fortitudeSave : 1,
				intelligenceSave : 1
			}
		}
	},
	Dwarf : {
		health : 9,
		weapons : [
			"Hand Hammers",
			"Warhammers",
			"Heavy Guns"
		],
		skills : {
			athletics	 : 1,
			history		 : 1,
			craft		 : 1,
			stealth		 : -1,
			acrobatics	 : -1,
			deception	 : -1
		},
		options : {
			stats : {
				fortitude	 : true,
				dexterity	 : false,
				intelligence : true,
				wisdom		 : true,
				charisma	 : true
			},
			saves : {
				fortitudeSave : 2
			}
		}
	},
	Gnome : {
		health : 3,
		language : {
			intRequirement	: 1,
			language		: "1 additional Common language"
		},
		weapons : [
			"Daggers",
			"Slings",
			"Hand Crossbows"
		],
		skills : {
			arcana		 : 1,
			stealth		 : 1,
			luck		 : 1,
			athletics	 : -1,
			biology		 : -1,
			intimidation : -1
		},
		options : {
			stats : {
				fortitude	 : false,
				dexterity	 : true,
				intelligence : true,
				wisdom		 : true,
				charisma	 : true
			},
			saves : {
				dexteritySave : 1,
				charismaSave : 1
			}
		}
	},
	Human : {
		health : 6,
		language : {
			intRequirement	: 1,
			language		: "1 additional Common language"
		},
		skills : {
			ofChoice : 2,
		},
		options : {
			stats : {
				fortitude	 : true,
				dexterity	 : true,
				intelligence : true,
				wisdom		 : true,
				charisma	 : true
			}
		}
	},
	Hollow : {
		health : 2,
		language : {
			intRequirement	: 1,
			language		: "1 additional Common language"
		},
		skills : {
			athletics	: -1,
			luck		: -1,
			nature		: -1,
			parsuasion	: -1,
			animalHandling : -1
		},
		options : {
			stats : {
				fortitude	 : false,
				dexterity	 : false,
				intelligence : true,
				wisdom		 : true,
				charisma	 : true
			},
			saves : {
				fortitudeSave : 2,
				wisdomSave : 2
			}
		}
	},
	Elf : {
		health : 6,
		weapons : [
			"Longbow",
			"Shortbow"
		],
		skills : {
			nature : 1,
			knowledge : 1,
			arcana : 1,
			athletics : -1,
			useRope : -1,
			luck : -1
		},
		options : {
			stats : {
				fortitude	 : false,
				dexterity	 : true,
				intelligence : true,
				wisdom		 : true,
				charisma	 : true
			},
			saves : {
				dexteritySave : 1,
				intelligenceSave : 1
			}
		}
	},
	Orc : {
		health : 7,
		language : {
			intRequirement	: 1,
			language		: "1 additional Wild language"
		},
		weapons : [
			"Hand Axes",
			"Battle Axes"
		],
		skills : {
			athletics : 1,
			perception : 1,
			intimidation : 1,
			knowledge : -1,
			insight : -1,
			persuasion : -1
		},
		options : {
			stats : {
				fortitude	 : true,
				dexterity	 : true,
				intelligence : false,
				wisdom		 : true,
				charisma	 : true
			},
			saves : {
				fortitudeSave : 1
			}
		}
	}
}


Classes = {
	Cleric : {
		health : 7,
		levelUpHealth : 5,
		charges : 3,
		chargesReset : "Long Rest",
		knownSpellsAndManeuvers : "normal",
		spellCaster : true,
		language : {
			intRequirement	: 2,
			language		: "1 additional Higher or Common language"
		},
		skills : {
			religion : 1,
			luck : 1,
			insight : 1,
			biology : -1,
			investigation : -1,
			deception : -1
		},
		options : {
			stats : {
				fortitude	 : true,
				dexterity	 : false,
				intelligence : true,
				wisdom		 : true,
				charisma	 : true
			},
			saves : {
				wisdomSave : 2,
				charismaSave : 2
			}
		}
	},
	Druid : {
		health : 6,
		levelUpHealth : 5,
		charges : 3,
		chargesReset : "Long Rest",
		knownSpellsAndManeuvers : "normal",
		spellCaster : true,
		language : {
			intRequirement	: 1,
			language		: "Druidic, the ancient language of Druids"
		},
		skills : {
			nature : 1,
			animalHandling : 1,
			survival : 1,
			persuasion : -1,
			history : -1,
			deception : -1
		},
		options : {
			stats : {
				fortitude	 : true,
				dexterity	 : true,
				intelligence : true,
				wisdom		 : true,
				charisma	 : false
			},
			saves : {
				wisdomSave : 2,
				fortitudeSave : 2
			}
		}
	},
	Hunter : {
		health : 7,
		levelUpHealth : 5,
		charges : 3,
		chargesReset : "Long Rest",
		knownSpellsAndManeuvers : "half",
		spellCaster : true,
		language : {
			intRequirement	: 2,
			language		: "1 Common or Wild language"
		},
		skills : {
			nature : 1,
			stealth : 1,
			perception : 1,
			religion : -1,
			history : -1,
			performance : -1
		},
		options : {
			stats : {
				fortitude	 : true,
				dexterity	 : true,
				intelligence : false,
				wisdom		 : false,
				charisma	 : true
			},
			saves : {
				dexteritySave : 3
			}
		}
	},
	Mage : {
		health : 4,
		levelUpHealth : 5,
		charges : 4,
		chargesReset : "Long Rest",
		knownSpellsAndManeuvers : "normal",
		spellCaster : true,
		language : {
			intRequirement	: 2,
			language		: "1 Common or Wild language"
		},
		skills : {
			arcana : 1,
			knowledge : 1,
			history : 1,
			athletics : -1,
			acrobatics : -1,
			survival : -1
		},
		options : {
			stats : {
				fortitude	 : true,
				dexterity	 : true,
				intelligence : true,
				wisdom		 : true,
				charisma	 : true
			},
			saves : {
				intelligenceSave : 2,
				charismaSave : 2
			}
		}
	},
	Paladin : {
		health : 4,
		levelUpHealth : 6,
		charges : 3,
		chargesReset : "Long Rest",
		knownSpellsAndManeuvers : "half",
		spellCaster : true,
		language : {
			intRequirement	: 2,
			language		: "either Celestial or Abyssal"
		},
		skills : {
			athletics : 1,
			religion : 1,
			persuasion : 1,
			acrobatics : -1,
			deception : -1,
			sleightOfHand : -1
		},
		options : {
			stats : {
				fortitude	 : true,
				dexterity	 : false,
				intelligence : false,
				wisdom		 : true,
				charisma	 : true
			},
			saves : {
				wisdomSave : 2,
				charismaSave : 2
			}
		}
	},
	Rogue : {
		health : 5,
		levelUpHealth : 5,
		charges : 3,
		chargesReset : "Long Rest",
		knownSpellsAndManeuvers : "half",
		spellCaster : false,
		language : {
			intRequirement	: 1,
			language		: "Thieves' Cant"
		},
		skills : {
			stealth : 1,
			acrobatics : 1,
			sleightOfHand : 1,
			religion : -1,
			persuasion : -1,
			history : -1
		},
		options : {
			stats : {
				fortitude	 : false,
				dexterity	 : true,
				intelligence : true,
				wisdom		 : true,
				charisma	 : true
			},
			saves : {
				dexteritySave : 3
			}
		}
	},
	Shaman : {
		health : 5,
		levelUpHealth : 5,
		charges : 3,
		chargesReset : "Long Rest",
		knownSpellsAndManeuvers : "normal",
		spellCaster : true,
		language : {
			intRequirement	: 2,
			language		: "1 Common, Wild or Elemental language"
		},
		skills : {
			nature : 1,
			religion : 1,
			insight : 1,
			sleightOfHand : -1,
			arcana : -1,
			history : -1
		},
		options : {
			stats : {
				fortitude	 : true,
				dexterity	 : true,
				intelligence : false,
				wisdom		 : true,
				charisma	 : false
			},
			saves : {
				wisdomSave : 3
			}
		}
	},
	Warlock : {
		health : 3,
		levelUpHealth : 6,
		charges : 2,
		chargesReset : "Short Rest",
		knownSpellsAndManeuvers : "normal",
		spellCaster : true,
		language : {
			intRequirement	: 2,
			language		: "1 Higher language"
		},
		skills : {
			religion : 1,
			knowledge : 1,
			perception : 1,
			stealth : -1,
			luck : -1,
			survival : -1
		},
		options : {
			stats : {
				fortitude	 : true,
				dexterity	 : true,
				intelligence : true,
				wisdom		 : true,
				charisma	 : true
			},
			saves : {
				fortitudeSave : 2,
				charismaSave : 2
			}
		}
	},
	Warrior : {
		health : 9,
		levelUpHealth : 5,
		charges : 3,
		chargesReset : "Long Rest",
		knownSpellsAndManeuvers : "half",
		spellCaster : false,
		skills : {
			athletics : 1,
			acrobatics : 1,
			survival : 1,
			investigation : -1,
			deception : -1,
			luck : -1
		},
		options : {
			stats : {
				fortitude	 : true,
				dexterity	 : true,
				intelligence : false,
				wisdom		 : true,
				charisma	 : true
			},
			saves : {
				dexteritySave : 2,
				fortitudeSave : 2
			}
		}
	},
}

Backgrounds = {
	Acoltye : {
		skills : {
			insight : 1,
			religion : 1,
			performance : 1,
			intimidation : -1,
			biology : -1,
			luck : -1
		}
	},
	Charlatan : {
		skills : {
			sleightOfHand : 1,
			deception : 1,
			insight : 1,
			luck : -1,
			animalHandling : -1,
			intimidation : -1
		}
	},
	Criminal : {
		skills : {
			stealth : 1,
			deception : 1,
			investigation : 1,
			history : -1,
			performance : -1,
			religion : -1
		}
	},
	Entertainer : {
		skills : {
			luck : 1,
			acrobatics : 1,
			performance : 1,
			survival : -1,
			animalHandling : -1,
			intimidation : -1
		}
	},
	FolkHero : {
		skills : {
			animalHandling : 1,
			survival : 1,
			luck : 1,
			deception : -1,
			arcana : -1,
			stealth : -1
		}
	},
	FolkVillain : {
		skills : {
			knowledge : 1,
			stealth : 1,
			investigation : 1,
			luck : -1,
			persuasion : -1,
			sleightOfHand : -1
		}
	},
	Knight : {
		skills : {
			athletics : 1,
			history : 1,
			performance : 1,
			deception : -1,
			nature : -1,
			craft : -1
		}
	},
	Noble : {
		skills : {
			history : 1,
			knowledge : 1,
			persuasion : 1,
			insight : 1,
			performance : -1,
			craft : -1,
			survival : -1,
			animalHandling : -1
		}
	},
	Outlander : {
		skills : {
			athletics : 1,
			survival : 1,
			nature : 1,
			biology : 1,
			knowledge : -1,
			deception : -1,
			history : -1,
			persuasion : -1
		}
	},
	Sage : {
		skills : {
			arcana : 1,
			knowledge : 1,
			history : 1,
			athletics : -1,
			stealth : -1,
			persuasion : -1
		}
	},
	Sailor : {
		skills : {
			luck : 1,
			perception : 1,
			useRope : 1,
			religion : -1,
			biology : -1,
			stealth : -1
		}
	},
	Soldier : {
		skills : {
			athletics : 1,
			acrobatics : 1,
			survival : 1,
			nature : -1,
			craft : -1,
			sleightOfHand : -1
		}
	},
	Urchin : {
		skills : {
			stealth : 1,
			sleightOfHand : 1,
			luck : -1,
			investigation : -1,
			knowledge : -1
		}
	}
}














