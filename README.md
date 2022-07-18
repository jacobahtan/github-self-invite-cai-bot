# GitHub Self-service Invite Collaborator Private Repository
Created this simple web app to embed SAP Conversational AI bot to assist user in self-inviting to a private GitHub repo. This web app is specifically developed to be deployed into SAP BTP Cloud Foundry environment.

![App Preview](https://user-images.githubusercontent.com/8436161/179453595-0ff375aa-c90f-448e-9702-e74bea78a1b7.png)

# Prerequisites
Completing the prerequisites will provide you with the following output that is required for your to get started, deploying this web app connected to your CAI bot.
- REPLACE_WITH_CAI_CHANNEL_ID
- REPLACE_WITH_CAI_TOKEN
- REPLACE_WITH_CAI_PREFERENCES
- REPLACE_WITH_CAI_BOT_ID

## Fork [this bot](https://cai.tools.sap/jacobahtan/git-repo-self-invite-collab/skills/fallback) to your own SAP Conversational AI account, then follow steps in the [README](https://cai.tools.sap/jacobahtan/git-repo-self-invite-collab/skills/fallback).
1. In your bot overview, go to Connect tab.
2. Under Primary Channels, select SAP Conversation AI Web Client > Hit on the '+' to create one.
3. Complete configuration.
4. Take note of the following properties towards the end that will be required for you to get started below:
- REPLACE_WITH_CAI_CHANNEL_ID is referring to data-channel-id
- REPLACE_WITH_CAI_TOKEN is referring to data-token
- REPLACE_WITH_CAI_PREFERENCES is referring to data-expander-preferences
- REPLACE_WITH_CAI_BOT_ID is referring to id

# Get Started
## Step 1: Clone this repo locally.
```bash
git clone https://github.com/jacobahtan/github-self-invite-cai-bot.git github-repo-bot
```
## Step 2: Open index.html and modify the properties according to the configuration setup in Prerequistes. Save all files.
- REPLACE_WITH_CAI_CHANNEL_ID
- REPLACE_WITH_CAI_TOKEN
- REPLACE_WITH_CAI_PREFERENCES
- REPLACE_WITH_CAI_BOT_ID

## Step 3: Push into SAP BTP Cloud Foundry
```bash
cd github-repo-bot
cf push
```
