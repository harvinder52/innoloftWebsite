import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../api";
import {
  addBusinessModel,
  setCompany,
  setCategories,
  setInvestmentEffort,
  setTRLValue,
  setUser,
} from "../slices/detailSlice";
import {
  setDescription,
  setHeaderImage,
  setTitle,
  setType,
} from "../slices/descriptionSlice";
import { setUrl } from "../slices/urlSlice";
import { fetchConfiguration } from "../api";
import { setConfiguration } from "../slices/configurationSlice";

const DataUpdater = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchConfigData = async () => {
      try {
        const appId = process.env.APP_ID || 1;
        console.log("APP_ID:", appId);
        const configData = await fetchConfiguration(appId);
        console.log(configData);
        dispatch(setConfiguration(configData));
      } catch (error) {
        console.error("Error fetching configuration data:", error);
      }
    };

    fetchConfigData();
  }, [dispatch]);

  useEffect(() => {
    fetchData()
      .then((data) => {
        if (data) {
          console.log(data);
          dispatch(setTRLValue(data.trl.name));
          dispatch(setInvestmentEffort(data.investmentEffort));
          dispatch(
            setCategories(data.categories.map((category) => category.name))
          );

          dispatch(
            addBusinessModel(
              data.businessModels.map((businessModel) => businessModel.name)
            )
          );
          console.log(data.trl.name);
          //the fetched description contains HTML/JS, which is dangerous and
          //should be removed by sanitizing it
          dispatch(setDescription(data.description));

          dispatch(setTitle(data.name));
          console.log("data for the company ", data.company);
          dispatch(setCompany(data.company));

          dispatch(setUser(data.user));
          dispatch(setHeaderImage(data.picture));
          dispatch(setType(data.type.name));
          dispatch(setUrl(data.video));
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);

  return <></>;
};

export default DataUpdater;
