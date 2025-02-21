import { useState } from "react";

const folderData = {
  folderTree1: [
    {
      name: "classification",
      status: "present",
      path: "classification",
      type: "folder",
      children: [
        {
          name: "flowers-classification.ditamap",
          status: "present",
          path: "classification/flowers-classification.ditamap",
          type: "file",
          children: [],
        },
        {
          name: "flowers-subject-scheme.ditamap",
          status: "present",
          path: "classification/flowers-subject-scheme.ditamap",
          type: "file",
          children: [],
        },
      ],
    },
    {
      name: "concepts",
      status: "present",
      path: "concepts",
      type: "folder",
      children: [
        {
          name: "autumnFlowers.dita",
          status: "present",
          path: "concepts/autumnFlowers.dita",
          type: "file",
          children: [],
        },
        {
          name: "glossaryBulb.dita",
          status: "present",
          path: "concepts/glossaryBulb.dita",
          type: "file",
          children: [],
        },
        {
          name: "glossaryCultivar.dita",
          status: "present",
          path: "concepts/glossaryCultivar.dita",
          type: "file",
          children: [],
        },
        {
          name: "glossaryGenus.dita",
          status: "present",
          path: "concepts/glossaryGenus.dita",
          type: "file",
          children: [],
        },
        {
          name: "glossaryPanicle.dita",
          status: "present",
          path: "concepts/glossaryPanicle.dita",
          type: "file",
          children: [],
        },
        {
          name: "glossaryPerennial.dita",
          status: "present",
          path: "concepts/glossaryPerennial.dita",
          type: "file",
          children: [],
        },
        {
          name: "glossaryRhizome.dita",
          status: "present",
          path: "concepts/glossaryRhizome.dita",
          type: "file",
          children: [],
        },
        {
          name: "glossarySepal.dita",
          status: "present",
          path: "concepts/glossarySepal.dita",
          type: "file",
          children: [],
        },
        {
          name: "springFlowers.dita",
          status: "present",
          path: "concepts/springFlowers.dita",
          type: "file",
          children: [],
        },
        {
          name: "summerFlowers.dita",
          status: "present",
          path: "concepts/summerFlowers.dita",
          type: "file",
          children: [],
        },
        {
          name: "winterFlowers.dita",
          status: "present",
          path: "concepts/winterFlowers.dita",
          type: "file",
          children: [],
        },
        {
          name: "glossaryPollination.dita",
          status: "missing",
          path: "concepts/glossaryPollination.dita",
          type: "file",
          children: [],
        },
      ],
    },
    {
      name: "flowers.ditamap",
      status: "present",
      path: "flowers.ditamap",
      type: "file",
      children: [],
    },
    {
      name: "images",
      status: "present",
      path: "images",
      type: "folder",
      children: [
        {
          name: "Chrysanthemums.jpg",
          status: "present",
          path: "images/Chrysanthemums.jpg",
          type: "file",
          children: [],
        },
        {
          name: "Gardeniaflower.jpg",
          status: "present",
          path: "images/Gardeniaflower.jpg",
          type: "file",
          children: [],
        },
        {
          name: "Gerbera.jpg",
          status: "present",
          path: "images/Gerbera.jpg",
          type: "file",
          children: [],
        },
        {
          name: "Iris_sanguinea.jpg",
          status: "present",
          path: "images/Iris_sanguinea.jpg",
          type: "file",
          children: [],
        },
        {
          name: "Lilac.jpg",
          status: "present",
          path: "images/Lilac.jpg",
          type: "file",
          children: [],
        },
        {
          name: "Salvia.jpg",
          status: "present",
          path: "images/Salvia.jpg",
          type: "file",
          children: [],
        },
        {
          name: "Snowdrop.jpg",
          status: "present",
          path: "images/Snowdrop.jpg",
          type: "file",
          children: [],
        },
      ],
    },
    {
      name: "publishing",
      status: "present",
      path: "publishing",
      type: "folder",
      children: [
        {
          name: "flowers",
          status: "present",
          path: "publishing/flowers",
          type: "folder",
          children: [
            {
              name: "flowers-tiles.opt",
              status: "present",
              path: "publishing/flowers/flowers-tiles.opt",
              type: "file",
              children: [],
            },
            {
              name: "flowers-tiles.png",
              status: "present",
              path: "publishing/flowers/flowers-tiles.png",
              type: "file",
              children: [],
            },
            {
              name: "flowers-tree.opt",
              status: "present",
              path: "publishing/flowers/flowers-tree.opt",
              type: "file",
              children: [],
            },
            {
              name: "flowers-tree.png",
              status: "present",
              path: "publishing/flowers/flowers-tree.png",
              type: "file",
              children: [],
            },
            {
              name: "flowers.css",
              status: "present",
              path: "publishing/flowers/flowers.css",
              type: "file",
              children: [],
            },
            {
              name: "notes.css",
              status: "present",
              path: "publishing/flowers/notes.css",
              type: "file",
              children: [],
            },
            {
              name: "README.txt",
              status: "present",
              path: "publishing/flowers/README.txt",
              type: "file",
              children: [],
            },
            {
              name: "resources",
              status: "present",
              path: "publishing/flowers/resources",
              type: "folder",
              children: [
                {
                  name: "images",
                  status: "present",
                  path: "publishing/flowers/resources/images",
                  type: "folder",
                  children: [
                    {
                      name: "care_and_preparation_tile.png",
                      status: "present",
                      path: "publishing/flowers/resources/images/care_and_preparation_tile.png",
                      type: "file",
                      children: [],
                    },
                    {
                      name: "flowers_bgr.jpg",
                      status: "present",
                      path: "publishing/flowers/resources/images/flowers_bgr.jpg",
                      type: "file",
                      children: [],
                    },
                    {
                      name: "flowers_by_season_tile.png",
                      status: "present",
                      path: "publishing/flowers/resources/images/flowers_by_season_tile.png",
                      type: "file",
                      children: [],
                    },
                    {
                      name: "flower_logo.png",
                      status: "present",
                      path: "publishing/flowers/resources/images/flower_logo.png",
                      type: "file",
                      children: [],
                    },
                    {
                      name: "glossary_tile.png",
                      status: "present",
                      path: "publishing/flowers/resources/images/glossary_tile.png",
                      type: "file",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "tasks",
      status: "present",
      path: "tasks",
      type: "folder",
      children: [
        {
          name: "gardenPreparation.dita",
          status: "present",
          path: "tasks/gardenPreparation.dita",
          type: "file",
          children: [],
        },
        {
          name: "pruning.dita",
          status: "present",
          path: "tasks/pruning.dita",
          type: "file",
          children: [],
        },
      ],
    },
    {
      name: "topics",
      status: "present",
      path: "topics",
      type: "folder",
      children: [
        {
          name: "care.dita",
          status: "present",
          path: "topics/care.dita",
          type: "file",
          children: [],
        },
        {
          name: "copyright.dita",
          status: "present",
          path: "topics/copyright.dita",
          type: "file",
          children: [],
        },
        {
          name: "index.dita",
          status: "present",
          path: "topics/index.dita",
          type: "file",
          children: [],
        },
        {
          name: "introduction.dita",
          status: "present",
          path: "topics/introduction.dita",
          type: "file",
          children: [],
        },
        {
          name: "flowers",
          status: "missing",
          path: "topics/flowers",
          type: "folder",
          children: [
            {
              name: "chrysanthemum.dita",
              status: "missing",
              path: "topics/flowers/chrysanthemum.dita",
              type: "file",
              children: [],
            },
            {
              name: "gardenia.dita",
              status: "missing",
              path: "topics/flowers/gardenia.dita",
              type: "file",
              children: [],
            },
            {
              name: "gerbera.dita",
              status: "missing",
              path: "topics/flowers/gerbera.dita",
              type: "file",
              children: [],
            },
            {
              name: "lilac.dita",
              status: "missing",
              path: "topics/flowers/lilac.dita",
              type: "file",
              children: [],
            },
            {
              name: "salvia.dita",
              status: "missing",
              path: "topics/flowers/salvia.dita",
              type: "file",
              children: [],
            },
            {
              name: "snowdrop.dita",
              status: "missing",
              path: "topics/flowers/snowdrop.dita",
              type: "file",
              children: [],
            },
          ],
        },
      ],
    },
  ],
  folderTree2: [
    {
      name: "classification",
      status: "present",
      path: "classification",
      type: "folder",
      children: [
        {
          name: "flowers-classification.ditamap",
          status: "present",
          path: "classification/flowers-classification.ditamap",
          type: "file",
          children: [],
        },
        {
          name: "flowers-subject-scheme.ditamap",
          status: "present",
          path: "classification/flowers-subject-scheme.ditamap",
          type: "file",
          children: [],
        },
      ],
    },
    {
      name: "concepts",
      status: "present",
      path: "concepts",
      type: "folder",
      children: [
        {
          name: "autumnFlowers.dita",
          status: "present",
          path: "concepts/autumnFlowers.dita",
          type: "file",
          children: [],
        },
        {
          name: "glossaryBulb.dita",
          status: "present",
          path: "concepts/glossaryBulb.dita",
          type: "file",
          children: [],
        },
        {
          name: "glossaryCultivar.dita",
          status: "present",
          path: "concepts/glossaryCultivar.dita",
          type: "file",
          children: [],
        },
        {
          name: "glossaryGenus.dita",
          status: "present",
          path: "concepts/glossaryGenus.dita",
          type: "file",
          children: [],
        },
        {
          name: "glossaryPanicle.dita",
          status: "present",
          path: "concepts/glossaryPanicle.dita",
          type: "file",
          children: [],
        },
        {
          name: "glossaryPerennial.dita",
          status: "present",
          path: "concepts/glossaryPerennial.dita",
          type: "file",
          children: [],
        },
        {
          name: "glossaryRhizome.dita",
          status: "present",
          path: "concepts/glossaryRhizome.dita",
          type: "file",
          children: [],
        },
        {
          name: "glossarySepal.dita",
          status: "present",
          path: "concepts/glossarySepal.dita",
          type: "file",
          children: [],
        },
        {
          name: "springFlowers.dita",
          status: "present",
          path: "concepts/springFlowers.dita",
          type: "file",
          children: [],
        },
        {
          name: "summerFlowers.dita",
          status: "present",
          path: "concepts/summerFlowers.dita",
          type: "file",
          children: [],
        },
        {
          name: "winterFlowers.dita",
          status: "present",
          path: "concepts/winterFlowers.dita",
          type: "file",
          children: [],
        },
        {
          name: "glossaryPollination.dita",
          status: "present",
          path: "concepts/glossaryPollination.dita",
          type: "file",
          children: [],
        },
      ],
    },
    {
      name: "flowers.ditamap",
      status: "present",
      path: "flowers.ditamap",
      type: "file",
      children: [],
    },
    {
      name: "images",
      status: "present",
      path: "images",
      type: "folder",
      children: [
        {
          name: "Chrysanthemums.jpg",
          status: "present",
          path: "images/Chrysanthemums.jpg",
          type: "file",
          children: [],
        },
        {
          name: "Gardeniaflower.jpg",
          status: "present",
          path: "images/Gardeniaflower.jpg",
          type: "file",
          children: [],
        },
        {
          name: "Gerbera.jpg",
          status: "present",
          path: "images/Gerbera.jpg",
          type: "file",
          children: [],
        },
        {
          name: "Iris_sanguinea.jpg",
          status: "present",
          path: "images/Iris_sanguinea.jpg",
          type: "file",
          children: [],
        },
        {
          name: "Lilac.jpg",
          status: "present",
          path: "images/Lilac.jpg",
          type: "file",
          children: [],
        },
        {
          name: "Salvia.jpg",
          status: "present",
          path: "images/Salvia.jpg",
          type: "file",
          children: [],
        },
        {
          name: "Snowdrop.jpg",
          status: "present",
          path: "images/Snowdrop.jpg",
          type: "file",
          children: [],
        },
      ],
    },
    {
      name: "publishing",
      status: "present",
      path: "publishing",
      type: "folder",
      children: [
        {
          name: "flowers",
          status: "present",
          path: "publishing/flowers",
          type: "folder",
          children: [
            {
              name: "flowers-tiles.opt",
              status: "present",
              path: "publishing/flowers/flowers-tiles.opt",
              type: "file",
              children: [],
            },
            {
              name: "flowers-tiles.png",
              status: "present",
              path: "publishing/flowers/flowers-tiles.png",
              type: "file",
              children: [],
            },
            {
              name: "flowers-tree.opt",
              status: "present",
              path: "publishing/flowers/flowers-tree.opt",
              type: "file",
              children: [],
            },
            {
              name: "flowers-tree.png",
              status: "present",
              path: "publishing/flowers/flowers-tree.png",
              type: "file",
              children: [],
            },
            {
              name: "flowers.css",
              status: "present",
              path: "publishing/flowers/flowers.css",
              type: "file",
              children: [],
            },
            {
              name: "notes.css",
              status: "present",
              path: "publishing/flowers/notes.css",
              type: "file",
              children: [],
            },
            {
              name: "README.txt",
              status: "present",
              path: "publishing/flowers/README.txt",
              type: "file",
              children: [],
            },
            {
              name: "resources",
              status: "missing",
              path: "publishing/flowers/resources",
              type: "folder",
              children: [
                {
                  name: "images",
                  status: "missing",
                  path: "publishing/flowers/resources/images",
                  type: "folder",
                  children: [
                    {
                      name: "care_and_preparation_tile.png",
                      status: "missing",
                      path: "publishing/flowers/resources/images/care_and_preparation_tile.png",
                      type: "file",
                      children: [],
                    },
                    {
                      name: "flowers_bgr.jpg",
                      status: "missing",
                      path: "publishing/flowers/resources/images/flowers_bgr.jpg",
                      type: "file",
                      children: [],
                    },
                    {
                      name: "flowers_by_season_tile.png",
                      status: "missing",
                      path: "publishing/flowers/resources/images/flowers_by_season_tile.png",
                      type: "file",
                      children: [],
                    },
                    {
                      name: "flower_logo.png",
                      status: "missing",
                      path: "publishing/flowers/resources/images/flower_logo.png",
                      type: "file",
                      children: [],
                    },
                    {
                      name: "glossary_tile.png",
                      status: "missing",
                      path: "publishing/flowers/resources/images/glossary_tile.png",
                      type: "file",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "tasks",
      status: "present",
      path: "tasks",
      type: "folder",
      children: [
        {
          name: "gardenPreparation.dita",
          status: "present",
          path: "tasks/gardenPreparation.dita",
          type: "file",
          children: [],
        },
        {
          name: "pruning.dita",
          status: "present",
          path: "tasks/pruning.dita",
          type: "file",
          children: [],
        },
      ],
    },
    {
      name: "topics",
      status: "present",
      path: "topics",
      type: "folder",
      children: [
        {
          name: "care.dita",
          status: "present",
          path: "topics/care.dita",
          type: "file",
          children: [],
        },
        {
          name: "copyright.dita",
          status: "present",
          path: "topics/copyright.dita",
          type: "file",
          children: [],
        },
        {
          name: "index.dita",
          status: "present",
          path: "topics/index.dita",
          type: "file",
          children: [],
        },
        {
          name: "introduction.dita",
          status: "present",
          path: "topics/introduction.dita",
          type: "file",
          children: [],
        },
        {
          name: "flowers",
          status: "present",
          path: "topics/flowers",
          type: "folder",
          children: [
            {
              name: "chrysanthemum.dita",
              status: "present",
              path: "topics/flowers/chrysanthemum.dita",
              type: "file",
              children: [],
            },
            {
              name: "gardenia.dita",
              status: "present",
              path: "topics/flowers/gardenia.dita",
              type: "file",
              children: [],
            },
            {
              name: "gerbera.dita",
              status: "present",
              path: "topics/flowers/gerbera.dita",
              type: "file",
              children: [],
            },
            {
              name: "lilac.dita",
              status: "present",
              path: "topics/flowers/lilac.dita",
              type: "file",
              children: [],
            },
            {
              name: "salvia.dita",
              status: "present",
              path: "topics/flowers/salvia.dita",
              type: "file",
              children: [],
            },
            {
              name: "snowdrop.dita",
              status: "present",
              path: "topics/flowers/snowdrop.dita",
              type: "file",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`ml-4 ${
        node.status === "missing" ? "text-red-600 font-bold" : "text-gray-800"
      }`}
    >
      {node.type === "folder" ? (
        <div
          className="cursor-pointer font-semibold flex items-center"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "📂" : "📁"} {node.name}
        </div>
      ) : (
        <div className="pl-4">📄 {node.name}</div>
      )}
      {expanded && node.children && (
        <div className="ml-4 border-l border-gray-300 pl-2">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function FolderTreeComparison() {
  return (
    <div className="flex gap-10 p-10 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-5 w-1/2">
        <h3 className="text-xl font-bold mb-4">Folder Tree 1</h3>
        {folderData.folderTree1.map((node, index) => (
          <TreeNode key={index} node={node} />
        ))}
      </div>
      <div className="bg-white shadow-lg rounded-lg p-5 w-1/2">
        <h3 className="text-xl font-bold mb-4">Folder Tree 2</h3>
        {folderData.folderTree2.map((node, index) => (
          <TreeNode key={index} node={node} />
        ))}
      </div>
    </div>
  );
}
