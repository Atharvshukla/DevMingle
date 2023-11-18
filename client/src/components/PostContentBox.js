// import { useTheme } from "@emotion/react";
// import { autocompleteClasses, Box, Card, CardActionArea } from "@mui/material";
// import React from "react";
// import "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const PostContentBox = (props) => {
//   const { clickable, post, editing } = props;
//   const theme = useTheme();
//   const navigate = useNavigate();

//   return (
//     <>
//       {clickable && !editing ? (
//         <Box
//           sx={{
//             padding: theme.spacing(2),
//             width: "92%",
//             "&:hover": { backgroundColor: "grey.50", cursor: "pointer" },
//           }}
//           onClick={() => navigate("/posts/" + post._id)}
//         >
//           {props.children}
//         </Box>
//       ) : (
//         <Box sx={{ padding: theme.spacing(2), width: "90%" }}>
//           {props.children}
//         </Box>
//       )}
//     </>
//   );
// };

// export default PostContentBox;


import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const PostContentBox = (props) => {
  const { clickable, post, editing } = props;
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      {clickable && !editing ? (
        <Box
          sx={{
            padding: theme.spacing(2),
            width: "92%",
            backgroundColor: theme.palette.background.paper,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
              cursor: "pointer",
            },
          }}
          onClick={() => navigate("/posts/" + post._id)}
        >
          {props.children}
        </Box>
      ) : (
        <Box
          sx={{
            padding: theme.spacing(2),
            width: "90%",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          {props.children}
        </Box>
      )}
    </>
  );
};

export default PostContentBox;
