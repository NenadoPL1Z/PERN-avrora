import teamJson from '../../../../public/home/teamData/teamData.json'

export const useHomeTeam = () => {
    const teamData = teamJson
    const isTeamData = Array.isArray(teamData) && teamData?.length

    return {
        teamData,
        isTeamData
    }
}
