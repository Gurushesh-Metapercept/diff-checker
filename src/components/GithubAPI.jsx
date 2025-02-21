import GitComparison from "./GitComparison";
const token = "hehe";

const GithubAPI = () => {
  return (
    <div>
      <GitComparison
        owner={"Gurushesh-Metapercept"}
        repo={"MD_DITA_Backend"}
        baseBranch={"dev"}
        headBranch={"cleanup"}
        token={token}
      />
    </div>
  );
};

export default GithubAPI;
