/********************************************************************************
* Copyright (c) 2022,2023 BMW Group AG 
* Copyright (c) 2022,2023 Contributors to the Eclipse Foundation
*
* See the NOTICE file(s) distributed with this work for additional
* information regarding copyright ownership.
*
* This program and the accompanying materials are made available under the
* terms of the Apache License, Version 2.0 which is available at
* https://www.apache.org/licenses/LICENSE-2.0.
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations
* under the License.
*
* SPDX-License-Identifier: Apache-2.0
********************************************************************************/
import clsx from "clsx";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "cx-portal-shared-components";
import { capitalize } from "@mui/material";
export const columns = (ranges, onDetailClick) => {
  const hiddenColumns = ["street", "houseNumber", "zipCode"];
  return [
    {
      description: "Business Partner Number",
      field: "bpn",
      flex: 2,
      headerName: "Business Partner Number",
    },
    {
      description: "Legal Name",
      field: "legalName",
      flex: 2,
      headerName: "Legal Name",
    },
    ...hiddenColumns.map((field) => ({
      description: field,
      field,
      flex: 2,
      headerName: capitalize(field),
      hide: true,
    })),
    {
      description: "Country",
      field: "country",
      flex: 1.5,
      headerName: "Country",
    },
    {
      description: "City",
      field: "city",
      flex: 1.5,
      headerName: "City",
    },
    {
      description: "Score",
      field: "score",
      headerName: "Score",
      flex: 1,
      cellClassName: (params) =>
        clsx("super-app", {
          minColor: params.value < ranges[1][0],
          between: params.value >= ranges[1][0] && params.value < ranges[2][0],
          maxColor: params.value >= ranges[2][0],
          nullColor: params.value === 0,
        }),
    },
    {
      description: "Rating",
      field: "rating",
      flex: 2,
      headerName: "Rating",
      cellClassName: (params) =>
        clsx("super-app", {
          nullColor: params.value === "",
        }),
    },
    {
      description: "Detail",
      field: "detail",
      flex: 2,
      headerName: "Detail",
      renderCell: ({ row }) => (
        <IconButton
          onClick={() => onDetailClick(row)}
          color="secondary"
          size="small"
          title="Detail"
          aria-label="detail-button"
        >
          <ArrowForwardIcon />
        </IconButton>
      ),
    },
  ];
};