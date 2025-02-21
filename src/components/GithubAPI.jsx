import GitComparison from "./GitComparison";
const token =
  "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";

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
