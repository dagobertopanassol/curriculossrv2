/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { DadosUsuario } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DadosUsuarioUpdateForm(props) {
  const {
    id: idProp,
    dadosUsuario,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nascimento: "",
    celular: "",
    foto: "",
  };
  const [nascimento, setNascimento] = React.useState(initialValues.nascimento);
  const [celular, setCelular] = React.useState(initialValues.celular);
  const [foto, setFoto] = React.useState(initialValues.foto);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = dadosUsuarioRecord
      ? { ...initialValues, ...dadosUsuarioRecord }
      : initialValues;
    setNascimento(cleanValues.nascimento);
    setCelular(cleanValues.celular);
    setFoto(cleanValues.foto);
    setErrors({});
  };
  const [dadosUsuarioRecord, setDadosUsuarioRecord] =
    React.useState(dadosUsuario);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(DadosUsuario, idProp)
        : dadosUsuario;
      setDadosUsuarioRecord(record);
    };
    queryData();
  }, [idProp, dadosUsuario]);
  React.useEffect(resetStateValues, [dadosUsuarioRecord]);
  const validations = {
    nascimento: [],
    celular: [],
    foto: [{ type: "URL" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nascimento,
          celular,
          foto,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            DadosUsuario.copyOf(dadosUsuarioRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DadosUsuarioUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nascimento"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={nascimento}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nascimento: value,
              celular,
              foto,
            };
            const result = onChange(modelFields);
            value = result?.nascimento ?? value;
          }
          if (errors.nascimento?.hasError) {
            runValidationTasks("nascimento", value);
          }
          setNascimento(value);
        }}
        onBlur={() => runValidationTasks("nascimento", nascimento)}
        errorMessage={errors.nascimento?.errorMessage}
        hasError={errors.nascimento?.hasError}
        {...getOverrideProps(overrides, "nascimento")}
      ></TextField>
      <TextField
        label="Celular"
        isRequired={false}
        isReadOnly={false}
        value={celular}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nascimento,
              celular: value,
              foto,
            };
            const result = onChange(modelFields);
            value = result?.celular ?? value;
          }
          if (errors.celular?.hasError) {
            runValidationTasks("celular", value);
          }
          setCelular(value);
        }}
        onBlur={() => runValidationTasks("celular", celular)}
        errorMessage={errors.celular?.errorMessage}
        hasError={errors.celular?.hasError}
        {...getOverrideProps(overrides, "celular")}
      ></TextField>
      <TextField
        label="Foto"
        isRequired={false}
        isReadOnly={false}
        value={foto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nascimento,
              celular,
              foto: value,
            };
            const result = onChange(modelFields);
            value = result?.foto ?? value;
          }
          if (errors.foto?.hasError) {
            runValidationTasks("foto", value);
          }
          setFoto(value);
        }}
        onBlur={() => runValidationTasks("foto", foto)}
        errorMessage={errors.foto?.errorMessage}
        hasError={errors.foto?.hasError}
        {...getOverrideProps(overrides, "foto")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || dadosUsuario)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || dadosUsuario) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
