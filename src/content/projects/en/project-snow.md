---
title: "Project Snow | FiveM server"
summary: "A post-apocalyptic survival roleplay server on QBCore, with 16 custom Lua scripts and an official website in Next.js 16."
category: personal
order: 5
image: ../../../assets/projects/project_snow.png
highlight: "16 custom Lua scripts"
role: "Game systems and web development"
technologies: ["Lua", "FiveM", "QBCore", "ox_lib", "Next.js 16", "Tailwind", "discord.js", "Playwright", "Lighthouse"]
website: "https://www.odysseyzombie.xyz"
---

## The challenge

Project Snow (Odyssey Zombie RP) is a GTA V roleplay server set in a post-apocalyptic winter with radioactive snow. The resources available for FiveM didn't cover the survival experience I wanted: cold that actually affects the player, illnesses that progress over time, and events that force players to move around the map.

## What I did

I wrote **16 custom scripts** in Lua on top of QBCore. The main ones:

- **Survival core** (`jx-survival-core`): body temperature based on weather, clothing and heat sources; radiation zones with visual effects; staged zombie infection, curable with antidotes.
- **Illnesses** (`jx-illness`): cold, fever and pneumonia that progress in stages, with camera shake, stamina loss and food poisoning.
- **Dynamic events** (`juanix_meteorite`): meteorite strikes synced for every player, creating danger zones with loot.
- **Economy and progression**: hunting, grid-based crafting, smelting furnaces, electricity generation for shelters and daily quests.

I also built the server's **official website**.

## Technical decisions

- **Logic split between client and server.** The server syncs the events and states all players share, such as meteorites, while the client handles visual effects and UI.
- **Configuration separate from code.** Balance values (temperatures, timings, damage) live in `config.lua` files, so they can be tuned without touching the logic.
- **Website in Next.js 16** with Tailwind and shadcn/ui, plus a **Discord bot** built with discord.js for the community.
- **Automated performance audits** with Lighthouse and Playwright, capturing the site at several screen sizes and comparing results before and after each change.

## Result

A server with custom-built survival systems, integrated with community resources such as the inventory and zombie hordes, and a website ready for launch. It's the project where I practiced system design and client-server synchronization the most.
